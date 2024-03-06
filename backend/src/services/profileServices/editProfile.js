import Profile from "../../models/Profile.js";
import User from "../../models/User.js";



const editProfile = async (req) => {
    const updatedProfileInfo = req.body
    req.file ? updatedProfileInfo.profileImg = req.file.filename : null
    const foundProfile = await Profile.findById(updatedProfileInfo._id);
    if (!foundProfile) throw new Error("Profile not found!")
    const updatedProfile = await Profile.findByIdAndUpdate(foundProfile._id, updatedProfileInfo, { new: true })
    if (foundProfile.userName !== updatedProfile.userName) {
        const foundUser = await User.findOne({ userId: updatedProfileInfo.userId });
        if (foundUser) throw new Error("This username is already taken ")
        const updatedUser = await User.findByIdAndUpdate(foundProfile.userId, { userName: updatedProfile.userName })
    }
    return updatedProfile
}




export default editProfile;