



const tokenRefresh = async (accessToken, setAuthorization) => {
    let timeout
    if (!accessToken) timeout = 100
    else timeout = calcTimeout(accessToken);
    setTimeout(async () => await getNewToken(setAuthorization), timeout)
}




const calcTimeout = (accessToken) => {
    const [_, payloadBase64] = accessToken.split(".");
    const { iat, exp } = JSON.parse(atob(payloadBase64));
    return (exp - iat - 120) * 1000
}


const getNewToken = async (setAuthorization) => {
    const tokenFetch = await fetch("http://localhost:3000/api/v1/users/renew", {
        credentials: "include"
    })
    const { success, error, newAccessToken } = await tokenFetch.json();
    if (!success) console.log(error)
    else {
        setAuthorization(`Bearer ${newAccessToken}`)
        tokenRefresh(newAccessToken, setAuthorization)
    }
}



export default tokenRefresh;