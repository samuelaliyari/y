import Fiddle from "../../models/Fiddle.js"




const dislikeFiddle = async (profileId, fiddleId) => {
    const foundFiddle = await Fiddle.findById(fiddleId);
    if (!foundFiddle) throw new Error("this Fiddles does not exixst any more!");
    const founddisLike = foundFiddle.dislikes.find(dislike => dislike.profileId.toString() === profileId);
    const foundLike = foundFiddle.likes.find(like => like.profileId.toString() === profileId);
    if (founddisLike) {
        foundFiddle.dislikes = foundFiddle.dislikes.filter(dislike => dislike.profileId.toString() !== profileId)
        const updatedFiddle = await foundFiddle.save()
        return updatedFiddle
    }
    if (foundLike) {
        foundFiddle.likes = foundFiddle.likes.filter(like => like.profileId.toString() !== profileId)
        await foundFiddle.save()
    }
    const newdisLike = await foundFiddle.dislikes.create({ profileId });
    foundFiddle.dislikes = [...foundFiddle.dislikes, newdisLike];
    const updatedFiddle = await foundFiddle.save();
    return updatedFiddle
}


export default dislikeFiddle;