import profilesServices from "../../services/profileServices/index.js";
import catchAsync from "../../utils/catchAsync.js";





const editProfileCtrl = catchAsync(async (req, res) => {
    const updatedProfile = await profilesServices.editProfile(req);
    res.status(200).json({ success: true, updatedProfile });
})



export default editProfileCtrl;