




const setLoggedInUser = async (authorization, setActiveProfile) => {
    const profileId = await extractProfileId(authorization);
    setActiveProfile(profileId)
}



const extractProfileId = async (authorization) => {

    const [type, accessToken] = authorization.split(" ")
    const [_, payloadBase64] = accessToken.split(".");
    const { sub } = JSON.parse(atob(payloadBase64));
    return sub
}


export default setLoggedInUser;