import fiddleServices from "../../services/fiddleServices/index.js";
import catchAsync from "../../utils/catchAsync.js";




const getAllFiddlesCtrl = catchAsync(async (_, res) => {
    const allFiddles = await fiddleServices.getAllFiddles();
    res.status(200).json({ success: true, result: allFiddles });
})



export default getAllFiddlesCtrl;