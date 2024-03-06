import creatFiddleCtrl from "./createFiddleCtrl.js";
import getAllFiddlesCtrl from "./getAllFiddlesCtrl.js";
import likeFiddleCtrl from "./likeFiddleCtrl.js";
import dislikeFiddleCtrl from "./dislikeFiddleCtrl.js";
import commentFiddleCtrl from "./commentFiddleCtrl.js";
import refiddleCtrl from "./refiddleCtrl.js";
const fiddlesController = {
    creatFiddle: creatFiddleCtrl,
    getAllFiddles: getAllFiddlesCtrl,
    likeFiddle: likeFiddleCtrl,
    dislikeFiddle: dislikeFiddleCtrl,
    commentFiddle: commentFiddleCtrl,
    refiddle: refiddleCtrl,

}


export default fiddlesController;