import mongoose from "mongoose"

// { type: Array, default: [{ type: mongoose.Types.ObjectId }] }
const profileSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    follower: [{ type: mongoose.Types.ObjectId }],
    chats: [{ type: mongoose.Types.ObjectId }],
    profileImg: { type: String, default: "avatar.png" },
    userId: { type: mongoose.Types.ObjectId, required: true },
    refiddles: [{ type: mongoose.Types.ObjectId }],
    privacy: { type: Boolean, default: false },
    savedFiddles: [{ type: mongoose.Types.ObjectId }],
    groups: [{ type: mongoose.Types.ObjectId }],
    bio: { type: String },
    // fiddles: [{ type: mongoose.Types.ObjectId }],
}, { collection: "profiles", timestamps: true })



const Profile = mongoose.model("Profile", profileSchema);

export default Profile;