import catchAsync from "../../utils/catchAsync.js";
import userServices from "../../services/userServices/index.js";



const renewTokenCtrl = catchAsync(async (req, res) => {
    const newAccessToken = await userServices.renewToken(req.session.refreshToken);
    res.status(200).json({ success: true, newAccessToken });
});


export default renewTokenCtrl;