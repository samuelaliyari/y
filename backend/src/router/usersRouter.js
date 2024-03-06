import express from "express";
import controller from "../controller/usersControllers/index.js";
import makeJwtAuth from "../jwt/MakeJwtAuth.js";
import usersControllers from "../controller/usersControllers/index.js";

const usersRouter = express.Router()
    .get("/", makeJwtAuth(), usersControllers.getAllUsers)
    .post("/register", usersControllers.registerUser)
    .post("/verifyemail", usersControllers.verifyEmail)
    .post("/login", usersControllers.loginUser)
    .get("/renew", makeJwtAuth("refresh"), usersControllers.renewToken)
    .get("/logout", makeJwtAuth(), usersControllers.logout)


export default usersRouter