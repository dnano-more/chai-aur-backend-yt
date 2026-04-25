import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const initCloudinary = () => {
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    throw new Error("Missing Cloudinary env variables");
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  // console.log("Cloudinary configured with:", process.env.CLOUDINARY_CLOUD_NAME);
};

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return "could not find filepath";

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfull
    console.log("file is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath); // ye locally saved temporary file ko remove karega

    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // agar upload operation fail hoga to ye locally saved temporary file ko remove karega
    }
    return null;
  }
};

export { uploadOnCloudinary, initCloudinary };
