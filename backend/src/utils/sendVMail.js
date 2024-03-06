import nodeMailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import createContent from "./createContent.js";

dotenv.config();


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.CLIENT_ID;
const FRONTENT_HOST_LINK = process.env.FRONTENT_HOST_LINK

const OAuthClient = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

OAuthClient.setCredentials({ refresh_token: REFRESH_TOKEN });


const sendVMail = async (v_code, userInfo, reciever) => {
    try {
        const accessToken = OAuthClient.getAccessToken();
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAUTH2",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
                user: "persianspacex@gmail.com"
            }
        })

        const result = await transporter.sendMail({
            from: "Y Social Platform",
            to: reciever,
            subject: "Your verification code",
            html: createContent(userInfo, v_code, FRONTENT_HOST_LINK)
        })

        return result
    } catch (error) {
        return error
    }
}


export default sendVMail