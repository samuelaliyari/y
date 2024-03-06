import createProfile from "./createProfile.js";
import toggleFollow from "./toggleFollow.js";
import getAllProfiles from "./getAllProfiles.js";
import editProfile from "./editProfile.js";


const profilesServices = {
    getAllProfiles,
    createProfile,
    toggleFollow,
    editProfile,
}



export default profilesServices;