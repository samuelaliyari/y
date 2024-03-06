import profilesServices from "../../services/profileServices/index.js";
import catchAsync from "../../utils/catchAsync.js";




const getAllProfilesCtrl = catchAsync(async (req, res) => {
    const allProfiles = await profilesServices.getAllProfiles();
    res.status(200).json({ success: true, result: allProfiles });
})



export default getAllProfilesCtrl;