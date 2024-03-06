


const catchAsync = (ctrlFunction, message = "Internal Server Error", status = 500) => {
    return (req, res, next) => ctrlFunction(req, res, next).catch(err => {
        console.log(err)
        res.status(status).json({ success: false, error: err, message: err.message || message })
    })
}


export default catchAsync

