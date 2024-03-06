import createToken from "../../jwt/createToken.js";
import User from "../../models/User.js"
import { hash } from "../../utils/hasher.js";





const loginUser = async (loginInfo) => {
    const { email, password } = loginInfo;
    if (!email || !password) throw new Error("Login Data not complete");
    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new Error("User does not exist");
    if (!foundUser.verified) throw new Error("Usermail is not verified");
    const inputPasshash = hash(password, foundUser.saltHash);
    if (inputPasshash !== foundUser.passwordHash) throw new Error("Wrong Password!")

    const accessToken = createToken(foundUser.profileId);
    const refreshToken = createToken(foundUser.profileId, "refresh");
    return { accessToken, refreshToken }
}


export default loginUser;