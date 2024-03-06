import catchAsync from "../../utils/catchAsync.js";
import userServices from "../../services/userServices/index.js";


const verifyEmailCtrl = catchAsync(async (req, res) => {
    const verifyResult = await userServices.verifyEmail(req.body)
    res.status(200).json({ success: true, result: verifyResult });
})


export default verifyEmailCtrl