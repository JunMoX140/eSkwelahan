import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import tokenValidator from "../services/tokenValidator.js";

const {JWT_SECRET}= process.env;

const authRouter = express.Router();

const userSchema = z.object({
  firstName: z.string(),
  middleName: z.string().nullable(),
  lastName: z.string(),
  suffix: z.string().nullable(),
  email: z.string().email(),
  password: z.string(),
  userType: z.number()
});

const loginCredentialSchema=z.object({
  email: z.string().email(),
  password: z.string()
});


authRouter.get("/", async (req, res) => {
  res.status(201).send(userList);
})

authRouter.post("/sign-up", async (req, res)=> {
  const newUser = await userSchema.safeParseAsync(req.body);

  if (!newUser.success) {
    return res.status(400).send(
        newUser.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }
  console.log(newUser)
  const { data }= newUser;
  const hashpassword = await bcrypt.hash(data.password, 10);
  try {
    const [createdUser] = await sql `INSERT INTO users (lastname,firstname,middlename,suffix,
      email,password,user_type_id) VALUES (${data.lastName},
      ${data.firstName},${data.middleName},${data.suffix},
      ${data.email},${hashpassword},${data.userType}) RETURNING *`;

        const token= generateToken(createdUser);
        return res.status(201).cookie('token', token, {httpOnly: true}).send(createdUser);

  } catch (e) {
    throw e;
  }
 
});

authRouter.get("/verify", (req, res)=>{
  const { isValid, ...props }= tokenValidator(req.cookies.token)

  if(isValid){
    return res.json(props);
  }else{
    return res.status(401).json(props);
  }
})

authRouter.post("/sign-out", (req, res)=>{
  return res.status(204).clearCookie("token", {httpOnly:true} ).send("token has reset");
});

authRouter.post("/sign-in", async (req, res) => {
  const result = await loginCredentialSchema.safeParseAsync(req.body);
  if (!result.success) {
    return res.status(400).json(
      result.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }
  const { email, password } = result.data;
  let [foundUser] = await sql`SELECT * FROM users WHERE email = ${email}`;

  if (!foundUser) {
    return res.status(404).json({ error: "Email doesn't exists" });
  }
  foundUser = camelcaseKeys(foundUser);

  const isPasswordMatch = await bcrypt.compare(
    password,
    foundUser.password
  );

  if (!isPasswordMatch) {
    return res.status(401).json({ error: "User not found!" });
  }
  const token = generateToken(foundUser);

  return res.status(200).cookie("token", token, { httpOnly: true }).json({
    id: foundUser.userId,
    email: foundUser.email,
    userType : foundUser.userTypeId
    
  });
});

authRouter.get("/verify", (req, res) => {
  const { isValid, ...props } = tokenValidator(req.cookies.token);

  if (isValid) {
    return res.json(props);
  } else {
    return res.status(401).json({ error: props.error });
  }
});

function generateToken (user, expiresIn="7d"){
  const payload={
    email : user.email,
  };
  console.log(JWT_SECRET);
  return jwt.sign(payload, JWT_SECRET, {expiresIn})
}



export default authRouter;