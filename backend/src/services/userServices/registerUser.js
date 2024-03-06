import User from "../../models/User.js"
import { generateSaltHash, hash } from "../../utils/hasher.js";
import sendVMail from "../../utils/sendVMail.js";
import toUserProfile from "../../utils/toUserProfile.js";
import profilesServices from "../profileServices/index.js";



const registerUser = async (userInfo) => {
    const email = userInfo.email;
    const userName = userInfo.userName;
    const foundUserByEmail = await User.findOne({ email });
    const foundUserbyUserName = await User.findOne({ userName });
    if (foundUserByEmail) throw new Error("User with this email already exists!")
    if (foundUserbyUserName) throw new Error("User with this Username already exists!")
    const v_code = Math.random().toString().slice(2, 8);
    const saltHash = generateSaltHash()
    const passwordHash = hash(userInfo.password, saltHash);
    const newUser = {
        ...userInfo,
        passwordHash,
        saltHash,
        v_code
    }
    const registeredUser = await User.create(newUser);
    const userProfile = registeredUser.createUserPofile();
    await sendVMail(v_code, userProfile, email);
    await profilesServices.createProfile({ userId: userProfile._id, userName: userProfile.userName })

    return toUserProfile(userProfile);
}



export default registerUser