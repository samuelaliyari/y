import User from "../../models/User.js";




const getAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers
}



export default getAllUsers