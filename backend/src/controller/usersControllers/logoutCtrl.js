import catchAsync from "../../utils/catchAsync.js";




const logoutCtrl = catchAsync(async (req, res) => {
    console.log(req.headers.authorizedUserId)
    req.session.refreshToken = null
    console.log(req.headers.authorizedUserId)
    res.status(200).json({ success: true, result: "Logout succeeded!" })
})



export default logoutCtrl;