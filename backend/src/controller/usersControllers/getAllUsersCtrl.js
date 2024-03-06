import catchAsync from "../../utils/catchAsync.js";
import userServices from "../../services/userServices/index.js";


const getAllUsersCtrl = catchAsync(async (_, res) => {
    const allUsers = await userServices.getAllUsers()
    res.status(200).json({ success: true, result: allUsers });
})


export default getAllUsersCtrl
