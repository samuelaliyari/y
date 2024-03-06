import Profile from "../../models/Profile.js"



const getAllProfiles = async () => {
    const allProfiles = await Profile.find()
    return allProfiles
}


export default getAllProfiles;