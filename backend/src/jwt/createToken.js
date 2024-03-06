import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

const createToken = (userId, tokenType = "access") => {
    const expiresIn = {
        "access": "10h",
        "refresh": "10day"
    }[tokenType] || "3min";
    const token = jwt.sign({ sub: userId, typ: tokenType }, JWT_SECRET, { expiresIn });
    return token
}


export default createToken;