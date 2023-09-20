import jwt from "jsonwebtoken";
import { environment } from "../environment.js";

const { JWT_SECRET } = environment;

export default function tokenValidator(token) {
  try {
    return {
      isValid: true,
      ...jwt.verify(token, JWT_SECRET),
    };
  } catch (e) {
    // JWT Errors: https://github.com/auth0/node-jsonwebtoken#errors--codes
    if (e.name === "TokenExpiredError") {
      return { isValid: false, error: "Token has already expired" };
    }

    if (e.name === "JsonWebTokenError") {
      return { isValid: false, error: "Token is required" };
    }

    throw e;
  }
}
