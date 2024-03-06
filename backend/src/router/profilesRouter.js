import express from "express";
import makeJwtAuth from "../jwt/MakeJwtAuth.js";
import profilesControllers from "../controller/profilesControllers/index.js";

const profilesRouter = express.Router()
    .get("/", profilesControllers.getAllProfiles)
    .post("/create", profilesControllers.createProfile)
    .post("/togglefollow", makeJwtAuth(), profilesControllers.toggleFollow)
    .post("/editprofile", makeJwtAuth(), profilesControllers.editProfile)


export default profilesRouter