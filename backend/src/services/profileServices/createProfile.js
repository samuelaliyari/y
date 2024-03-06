import Profile from "../../models/Profile.js"
import User from "../../models/User.js";


const createProfile = async (profileInfo) => {

    const foundUser = await User.findById(profileInfo.userId);
    if (!foundUser) throw new Error("User does not exist")

    const foundProfile = await Profile.findOne({ userId: profileInfo.userId });
    if (foundProfile) throw new Error("profile for this user Already exists");

    const createdProfile = await Profile.create(profileInfo);
    const updatedUser = await User.findByIdAndUpdate(profileInfo.userId, { profileId: createdProfile._id }, { new: true });

    return createdProfile
}


export default createProfile;