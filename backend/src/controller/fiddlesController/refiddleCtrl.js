import fiddleServices from "../../services/fiddleServices/index.js";
import catchAsync from "../../utils/catchAsync.js";







const refiddleCtrl = catchAsync(async (req, res) => {
    const { fiddleId } = req.body
    const profileId = req.headers.authorizedUserId
    const updatedFiddle = await fiddleServices.refiddle(profileId, fiddleId);
    res.status(200).json({ success: true, result: updatedFiddle });
})



export default refiddleCtrl;