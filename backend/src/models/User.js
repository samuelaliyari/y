import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    saltHash: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    profileId: { type: mongoose.Types.ObjectId },
    v_code: { type: Number, required: true },
    verified: { type: Boolean, default: false }

}, { collection: "users", timestamps: true })

userSchema.methods.createUserPofile = function () {
    return {
        _id: this._id,
        firstName: this.firstName,
        lastname: this.lastName,
        userName: this.userName,
        verified: this.verified,
        profileId: this.profileId,
    }
}

const User = mongoose.model("User", userSchema);


export default User