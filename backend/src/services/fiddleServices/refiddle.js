import mongoose, { Mongoose, mongo } from "mongoose";
import Fiddle from "../../models/Fiddle.js"
import Profile from "../../models/Profile.js";


const refiddle = async (profileId, fiddleId) => {
    const foundFiddle = await Fiddle.findById(fiddleId);
    if (!foundFiddle) throw new Error("this Fiddles does not exixst any more!");
    const foundRefiddle = foundFiddle.refiddles.find(refiddle => refiddle.profileId.toString() === profileId);
    const foundProfile = await Profile.findById(profileId);

    if (foundRefiddle) {
        foundFiddle.refiddles = foundFiddle.refiddles.filter(refiddle => refiddle.profileId.toString() !== profileId)
        const updatedFiddle = await foundFiddle.save()
        foundProfile.refiddles = [...foundProfile.refiddles].filter(refiddleId => refiddleId.toString() !== fiddleId)
        await foundProfile.save();
        return updatedFiddle
    }

    const newRefiddle = await foundFiddle.refiddles.create({ profileId });
    foundFiddle.refiddles = [...foundFiddle.refiddles, newRefiddle];
    const updatedFiddle = await foundFiddle.save();

    foundProfile.refiddles = [...foundProfile.refiddles, fiddleId]
    await foundProfile.save();
    return updatedFiddle
}


export default refiddle;