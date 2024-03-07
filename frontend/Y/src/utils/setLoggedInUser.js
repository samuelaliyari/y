




const setLoggedInUser = async (authorization, setActiveProfile) => {
    try {
        const profileId = await extractProfileId(authorization);
        setActiveProfile(profileId)
    } catch (error) {

    }
}



const extractProfileId = async (authorization) => {

    const [type, accessToken] = authorization.split(" ")
    const [_, payloadBase64] = accessToken.split(".");
    const { sub } = JSON.parse(atob(payloadBase64));
    return sub
}


export default setLoggedInUser;