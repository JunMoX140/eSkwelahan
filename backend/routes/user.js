import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import tokenValidator from "../services/tokenValidator.js";

const {JWT_SECRET}= process.env;
const userRouter = express.Router();


const userSchema = z.object({
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  suffix: z.string(),
  email: z.string().email(),
  password: z.string(),
  userType: z.number()
});


userRouter.get("/", async (req, res) => {
  res.status(201).send(userList);
})

userRouter.post("/sign-up", async (req, res)=> {
  const newUser = await userSchema.safeParseAsync(req.body);

  if (!newUser.success) {
    return res.status(400).send(
        newUser.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }

  const { data }= newUser;
  const hashpassword = await bcrypt.hash(data.password, 10);

  try {
    const [createdUser] = await sql `INSERT INTO users (lastname,firstname,middlename,suffix,
      email,password,user_type_id) VALUES (${data.lastname},
      ${data.firstname},${data.middlename},${data.suffix},
      ${data.email},${hashpassword},${data.userType}) RETURNING *`;

        const token= generateToken(createdUser);
        return res.status(201).cookie('token', token, {httpOnly: true}).send(createdUser);

  } catch (e) {
    throw e;
  }
 
});

userRouter.get("/verify", (req, res)=>{
  const { isValid, ...props }= tokenValidator(req.cookies.token)

  if(isValid){
    return res.json(props);
  }else{
    return res.status(401).json(props);
  }
})

userRouter.post("/sign-out", (req, res)=>{
  return res.status(201).clearCookie("token", {httpOnly:true} ).send();
});

userRouter.post("/sign-in", async (req, res)=>{
  const newUser = await userSchema.safeParseAsync(req.body);

  if (!newUser.success) {
    return res.status(400).send(
        newUser.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }
});

function generateToken (user, expiresIn="7d"){
  const payload={
    email : user.email,
  };
  console.log(JWT_SECRET);
  return jwt.sign(payload, JWT_SECRET, {expiresIn})
}



export default userRouter;