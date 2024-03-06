import express from "express";
import fiddlesController from "../controller/fiddlesController/index.js";
import makeJwtAuth from "../jwt/MakeJwtAuth.js";


const fiddlesRouter = express.Router()
    .get("/", fiddlesController.getAllFiddles)
    .post("/newfiddle", makeJwtAuth(), fiddlesController.creatFiddle)
    .post("/like", makeJwtAuth(), fiddlesController.likeFiddle)
    .post("/dislike", makeJwtAuth(), fiddlesController.dislikeFiddle)
    .post("/comment", makeJwtAuth(), fiddlesController.commentFiddle)
    .post("/refiddle", makeJwtAuth(), fiddlesController.refiddle)
export default fiddlesRouter;