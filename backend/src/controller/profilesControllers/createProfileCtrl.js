import profilesServices from "../../services/profileServices/index.js";
import catchAsync from "../../utils/catchAsync.js";





const createProfileCtrl = catchAsync(async (req, res) => {
    const createdProfile = await profilesServices.createProfile(req.body)
    res.status(201).json({ success: true, result: createdProfile })
})



export default createProfileCtrl;