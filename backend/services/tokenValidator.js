import jwt from 'jsonwebtoken';

const { JWT_SECRET }= process.env;

export default function tokenValidator(token){
    const decoded = jwt.verify(token, JWT_SECRET);
    try {
        if(decoded)
        {
            return {
                isValid: true,
                decoded,
            }
        }else{
            return { isValid: false, message: "Token is required"};
        }
       
    } catch (error) {
        if(error.name==='TokenExpiredError'){
            return { isValid: false, message: "Token has expired"};
        }
        if(error.name==='JsonWebTokenError'){
            return { isValid: false, message: "Token is required"};
        }

        throw error;
    }
}