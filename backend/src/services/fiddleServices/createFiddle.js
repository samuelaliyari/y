import mongoose from "mongoose";
import Fiddle from "../../models/Fiddle.js";
import Profile from "../../models/Profile.js"

const createFiddle = async (req, authorizedUserId) => {
    const fiddleInfo = {
        content: req.body.content,
        profileId: authorizedUserId,
        contentMedia: req.file?.filename || ""
    }
    const newFiddle = { ...fiddleInfo, profileId: authorizedUserId };
    const createdFiddle = await Fiddle.create(newFiddle);
    return createdFiddle;
}

export default createFiddle;

