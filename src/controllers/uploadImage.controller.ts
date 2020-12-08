import { Request, Response } from "express";
import Image from "../models/image.model";

const uploadImageController = (req: Request, res: Response) => {
  let image = new Image(req.body);
  image
    .save()
    .then(() => {
      res.json({ status: "ok", msg: "Uploaded image successfully!!" });
    })
    .catch((err) => {
      res.json({ status: "err", msg: err._message });
      console.error(`❌ ${err._message}`);
    });
};

export default uploadImageController;
