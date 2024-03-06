import profilesServices from "../../services/profileServices/index.js";
import catchAsync from "../../utils/catchAsync.js";





const toggleFollowCtrl = catchAsync(async (req, res) => {
    const result = await profilesServices.toggleFollow(req)
    res.status(200).json({ success: true, result });
})




export default toggleFollowCtrl;