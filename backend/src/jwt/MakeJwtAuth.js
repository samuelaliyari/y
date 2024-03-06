import jwt from "jsonwebtoken";
import "dotenv/config";
import catchAsync from "../utils/catchAsync.js";


const JWT_SECRET = process.env.JWT_SECRET;

const makeJwtAuth = (tokenType = "access") => {
    return catchAsync(async (req, _, next) => {
        const token = extractToken(req, tokenType);
        const authorizedUserClaims = jwt.verify(token, JWT_SECRET);
        if (!authorizedUserClaims) throw new Error("Authorization failed!");
        if (authorizedUserClaims.typ !== tokenType) throw new Error("Invalid authentification type !");
        req.headers.authorizedUserId = authorizedUserClaims.sub
        next()
    })
}



const extractToken = (req, tokenType) => {
    if (tokenType === "refresh") return req.session.refreshToken;
    const authorization = req.headers.authorization;
    if (!authorization) throw new Error("Authorization is needed!");
    const [authType, token] = authorization.split(" ");
    if (!authType || !token) throw new Error("Authorization data incomplete!");
    return token
}



export default makeJwtAuth