import fiddleServices from "../../services/fiddleServices/index.js";
import catchAsync from "../../utils/catchAsync.js";



const dislikeFiddleCtrl = catchAsync(async (req, res) => {
    const { fiddleId } = req.body
    const profileId = req.headers.authorizedUserId

    const updatedFiddle = await fiddleServices.dislikeFiddle(profileId, fiddleId);
    res.status(200).json({ success: true, result: updatedFiddle });
})



export default dislikeFiddleCtrl;