import loginUser from "./loginUser.js"
import getAllUsers from "./getAllUsers.js"
import registerUser from "./registerUser.js"
import verifyEmail from "./verifyEmail.js"
import renewToken from "./renewToken.js"

const userServices = {
    getAllUsers,
    registerUser,
    verifyEmail,
    loginUser,
    renewToken,
}


export default userServices