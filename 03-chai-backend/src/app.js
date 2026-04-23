import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DB_NAME, LIMIT } from "./constants.js";

const app = express();

app.use(
  // CORS → frontend connect karega backend se, toh CORS middleware use karna padega taaki wo allow kar sake frontend ko backend se connect karne ke liye
  cors({
    origin: process.env.CORS_ORIGIN, // central place
    credentials: true, // browser ko allow karna ki server pe wo request ke saath “sensitive data” bhej sake (jaise cookies, authorization headers, etc.)
  }),
);

app.use(express.json({ limit: LIMIT }));

app.use(express.urlencoded({ extended: true, limit: LIMIT })); // extended: true -> nested objects allow karta hai
// urlencoded → form data ko handle karne ke liye use hota hai, jab frontend se form submit hota hai toh wo data urlencoded format me hota hai, toh is middleware se hum usko parse kar sakte hain aur easily access kar sakte hain backend me.

app.use(cookieParser()); // cookie pe crud operations ya koi kaam karne ke liye

app.use(express.static("public")); // static files - serve karne ke liye (jaise images, css, js files, etc.) 
// public folder ke andar rakhenge static files ko taaki wo easily accessible ho sake aur unko serve kar sake express server


// routes import
import userRouter from "./routes/user.routes.js";


// routes declaration 
app.use("/api/v1/users", userRouter);  // /users → base route, userRouter → us route ke andar jo bhi routes define karenge wo is base route ke andar aayenge, jaise /users/register, /users/login, etc.
// http://localhost:8000/api/v1/users/register

export { app };
