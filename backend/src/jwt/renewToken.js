import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createToken from "./createToken.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

const renewToken = (refreshToken) => {
    const payload = jwt.verify(refreshToken, JWT_SECRET);
    if (!payload || payload.typ !== "refresh") throw new Error("Invalid Token");
    const newAccessToken = createToken(payload.sub)
    return newAccessToken
}

export default renewToken;