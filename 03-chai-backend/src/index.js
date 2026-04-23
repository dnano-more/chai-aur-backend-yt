// require("dotenv").config({path: "./env"})

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { initCloudinary } from "./utils/cloudinary.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

initCloudinary();

connectDB()
.then(() => {
    const server = app.listen(port, () => {
      console.log(`Server is runnnig at port ${port}`);
    });

    server.on("error", (err) => {
      console.error("Error while starting the server", err);
      throw err;
    });

  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
  
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");

    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();
*/
