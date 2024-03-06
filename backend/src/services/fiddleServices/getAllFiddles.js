import Fiddle from "../../models/Fiddle.js";



const getAllFiddles = async () => {
    const allFiddles = await Fiddle.find().sort({ createdAt: -1 });
    return allFiddles
}


export default getAllFiddles;