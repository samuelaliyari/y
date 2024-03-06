import fiddleServices from "../../services/fiddleServices/index.js";
import catchAsync from "../../utils/catchAsync.js";





const commentFiddleCtrl = catchAsync(async (req, res) => {
    const updatedFiddle = await fiddleServices.commentFiddle(req.body, req.headers.authorizedUserId);
    res.status(200).json({ success: true, result: updatedFiddle });
});


export default commentFiddleCtrl;