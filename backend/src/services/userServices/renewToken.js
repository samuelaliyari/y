import renewToken from "../../jwt/renewToken.js"



const tokenRenew = (refreshToken) => {
    const newAccessToken = renewToken(refreshToken);
    return newAccessToken
}


export default tokenRenew;