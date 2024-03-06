import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    profileId: { type: mongoose.Types.ObjectId, required: true },
}, { _id: false, timestamps: true });

const dislikeSchema = new mongoose.Schema({
    profileId: { type: mongoose.Types.ObjectId, required: true },
}, { _id: false, timestamps: true });

const refiddleSchema = new mongoose.Schema({
    profileId: { type: mongoose.Types.ObjectId, required: true },
}, { _id: false, timestamps: true });

const commentSchema = new mongoose.Schema({
    profileId: { type: mongoose.Types.ObjectId, required: true },
    content: { type: String, required: true }
}, { _id: false, timestamps: true });



const fiddleSchema = new mongoose.Schema({

    profileId: { type: mongoose.Types.ObjectId, required: true },
    content: { type: String, required: true },
    contentMedia: { type: String, default: "" },
    likes: [
        likeSchema
    ],
    dislikes: [dislikeSchema],
    comments:
        [commentSchema],
    tags: [{ type: String }],
    refiddles: [refiddleSchema],
    // audioComments,
}, { collection: "fiddles", timestamps: true });

const Fiddle = mongoose.model("Fiddle", fiddleSchema);

export default Fiddle;
