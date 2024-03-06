import catchAsync from "../../utils/catchAsync.js";
import userServices from "../../services/userServices/index.js";





const loginUserCtrl = catchAsync(async (req, res) => {
    const { accessToken, refreshToken } = await userServices.loginUser(req.body);
    req.session.refreshToken = refreshToken;
    res.status(200).json({ success: true, accessToken });
})



export default loginUserCtrl;