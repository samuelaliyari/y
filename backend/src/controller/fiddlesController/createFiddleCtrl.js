import fiddleServices from "../../services/fiddleServices/index.js";
import catchAsync from "../../utils/catchAsync.js";



const creatFiddleCtrl = catchAsync(async (req, res) => {

    const authorizesUserId = req.headers.authorizedUserId;
    const newFiddle = await fiddleServices.createFiddle(req, authorizesUserId);
    res.status(201).json({ success: true, result: newFiddle });
})

export default creatFiddleCtrl;
