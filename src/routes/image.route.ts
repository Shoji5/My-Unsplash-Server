import { Router } from "express";
import deleteImageController from "../controllers/deleteImage.controller";
import searchImageController from "../controllers/searchImage.controller";
import uploadImageController from "../controllers/uploadImage.controller";

const imageRoute = Router();

imageRoute.post("/upload", uploadImageController);

imageRoute.get("/search/:label?", searchImageController);

imageRoute.post("/delete", deleteImageController);

export default imageRoute;
