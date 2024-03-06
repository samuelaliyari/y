import catchAsync from "../../utils/catchAsync.js";
import userServices from "../../services/userServices/index.js";



const registerUserCtrl = catchAsync(async (req, res) => {

    const registereduserProfile = await userServices.registerUser(req.body);
    res.status(201).json({ success: true, result: registereduserProfile })
})


export default registerUserCtrl