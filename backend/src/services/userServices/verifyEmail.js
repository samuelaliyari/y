import User from "../../models/User.js";




const verifyEmail = async (verificationData) => {
    const { v_code, userId } = verificationData;
    if (!v_code || !userId) throw new Error("Verificationdata must be completely provided");
    const foundUser = await User.findById(userId);
    if (!foundUser) throw new Error("This user does not exist");
    if (Number(v_code) !== foundUser.v_code) throw new Error("Wrong verification code");
    foundUser.verified = true;
    const updatedUser = await foundUser.save();
    return updatedUser.createUserPofile()
}



export default verifyEmail