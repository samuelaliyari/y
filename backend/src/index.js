import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config.js"
import multer from "multer";
import mongoose from "mongoose";
import router from "./router/index.js";
import cookieSession from "cookie-session";


const app = express();


app.use(express.json());

app.use(express.static("./data"))

const storage = multer.diskStorage({
    destination: "./data",
    filename: (_, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage });
app.use(upload.single("image"));

const FRONTENT_HOST_LINK = process.env.FRONTENT_HOST_LINK;
const COOKIE_SECRET = process.env.COOKIE_SECRET

app.use(cors({ origin: FRONTENT_HOST_LINK, credentials: true }));

app.use(cookieSession({
    name: "session",
    httpOnly: true,
    signed: true,
    secure: false,
    secret: COOKIE_SECRET,
    maxAge: 10 * 24 * 60 * 60 * 1000
}))



app.use(morgan("dev"));


app.use("/api/v1/users", router.usersRouter)
app.use("/api/v1/profiles", router.profilesRouter)
app.use("/api/v1/fiddles", router.fiddlesRouter)


const PORT = process.env.PORT;

const URI = process.env.MONGO_URI;








const runServer = () => {
    console.log("Starting the Server...");
    app.listen(PORT, console.log("server started & listening @ PORT: " + PORT));
};






const connectDB = async () => {
    try {
        console.log("trying to connect to the MongoDB Database...")
        const dbConnection = await mongoose.connect(URI, { dbName: "Y", appName: "Y", })
        if (!dbConnection) throw new Error("DB Connection Failed")
        else console.log("Successfully connected to the Y Database")
    } catch (error) {
        console.log(error)
    }
}



connectDB().then(runServer).catch(err => console.log(err));



