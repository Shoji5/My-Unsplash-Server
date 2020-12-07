import { Request, Response } from "express";
import Image from "../models/image.model";

const uploadImageController = (req: Request, res: Response) => {
  let image = new Image(req.body);
  image
    .save()
    .then(() => {
      res.json({ msg: "upload successful!!" });
    })
    .catch((err) => {
      res.status(400).json({ msg: err._message });
      console.error(`❌ ${err._message}`);
    });
};

export default uploadImageController;
