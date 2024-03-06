import createProfileCtrl from "./createProfileCtrl.js";
import toggleFollowCtrl from "./toggleFollowCtrl.js";
import getAllProfilesCtrl from "./getAllProfilesCtrl.js";
import editProfileCtrl from "./editProfileCtrl.js";
const profilesControllers = {
    getAllProfiles: getAllProfilesCtrl,
    createProfile: createProfileCtrl,
    toggleFollow: toggleFollowCtrl,
    editProfile: editProfileCtrl,
}


export default profilesControllers;