import { Request, Response } from "express";
import Image from "../models/image.model";

const deleteImageController = (req: Request, res: Response) => {
  if (req.body.id) {
    Image.findById(req.body.id).then((image) => {
      if (!image) return res.json({ status: "err", msg: "No images found" });
      if (image.get("password") === req.body.password)
        image.remove().then(() => {
          return res.json({ status: "ok", msg: "Deleted image successfully" });
        });
      else res.json({ status: "err", msg: "Wrong password" });
    });
  } else res.json({ status: "err", msg: "No images found" });
};

export default deleteImageController;
