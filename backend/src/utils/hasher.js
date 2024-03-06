import crypto from "crypto";


export const generateSaltHash = () => {
    const salt = crypto.randomBytes(64).toString();
    const saltHash = crypto.createHash("sha512").update(salt).digest("hex");
    return saltHash
}


export const hash = (password, saltHash) => {
    const passHash = crypto.createHash("sha512").update(password).digest("hex");
    const passwordHash = crypto.createHash("sha512").update(passHash + saltHash).digest("hex");
    return passwordHash
}


