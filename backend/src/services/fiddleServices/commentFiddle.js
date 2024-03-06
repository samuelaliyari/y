import Fiddle from "../../models/Fiddle.js"
import Profile from "../../models/Profile.js";



const commentFiddle = async (commentInfo, authorizedUserId) => {
    const foundFiddle = await Fiddle.findById(commentInfo.fiddleId);
    if (!foundFiddle) throw new Error("The Fiddle does not exist anymore!");
    const profile = await Profile.findById(authorizedUserId)
    const newComment = foundFiddle.comments.create({ ...commentInfo, profileId: profile._id });
    foundFiddle.comments = [...foundFiddle.comments, newComment]
    const updatedFiddle = await foundFiddle.save();
    return updatedFiddle
}



export default commentFiddle;