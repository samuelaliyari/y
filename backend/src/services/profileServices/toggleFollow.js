import mongoose from "mongoose";
import Profile from "../../models/Profile.js";





const toggleFollow = async (req) => {
    const { targetProfileId } = req.body
    const followerId = req.headers.authorizedUserId
    const foundProfile = await Profile.findById(targetProfileId);
    if (!foundProfile) throw new Error("User does not exist!");
    if (!!foundProfile.follower.find(follower => follower.toString() === followerId)) {
        foundProfile.follower = [...foundProfile.follower].filter(follower => follower.toString() !== followerId);
        const savedProfile = await foundProfile.save();
        return savedProfile
    }
    foundProfile.follower = [...foundProfile.follower, followerId];
    const savedProfile = await foundProfile.save();
    return savedProfile;
}



export default toggleFollow;