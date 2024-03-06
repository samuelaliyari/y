import getAllUsersCtrl from "./getAllUsersCtrl.js"
import loginUserCtrl from "./loginUserCtrl.js"
import logoutCtrl from "./logoutCtrl.js"
import registerUserCtrl from "./registerUserCtrl.js"
import renewTokenCtrl from "./renewTokenCtrl.js"
import verifyEmailCtrl from "./verifyEmailCtrl.js"

const usersControllers = {
    getAllUsers: getAllUsersCtrl,
    registerUser: registerUserCtrl,
    verifyEmail: verifyEmailCtrl,
    renewToken: renewTokenCtrl,
    loginUser: loginUserCtrl,
    logout: logoutCtrl
}



export default usersControllers