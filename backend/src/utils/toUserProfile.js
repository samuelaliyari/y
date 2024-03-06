



const toUserProfile = ({
    _id,
    firstName,
    lastName,
    userName,
    gender,
    email,
    passwordHash,
    saltHash,
    phoneNumber,
    profileId,
    v_code,
    verified
}) => {
    return {
        _id,
        firstName,
        lastName,
        userName,
        email,
        verified
    }
}



export default toUserProfile