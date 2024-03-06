import Fiddle from "../../models/Fiddle.js"


const likeFiddle = async (profileId, fiddleId) => {
    const foundFiddle = await Fiddle.findById(fiddleId);
    if (!foundFiddle) throw new Error("this Fiddles does not exixst any more!");
    const foundLike = foundFiddle.likes.find(like => like.profileId.toString() === profileId);
    const foundDislike = foundFiddle.dislikes.find(dislike => dislike.profileId.toString() === profileId);

    if (foundLike) {
        foundFiddle.likes = foundFiddle.likes.filter(like => like.profileId.toString() !== profileId)
        const updatedFiddle = await foundFiddle.save()
        return updatedFiddle
    }
    if (foundDislike) {
        foundFiddle.dislikes = foundFiddle.dislikes.filter(dislike => dislike.profileId.toString() !== profileId)
        const updatedFiddle = await foundFiddle.save()
    }
    const newLike = await foundFiddle.likes.create({ profileId });
    foundFiddle.likes = [...foundFiddle.likes, newLike];
    const updatedFiddle = await foundFiddle.save();
    return updatedFiddle
}


export default likeFiddle;