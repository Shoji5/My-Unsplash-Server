import { Request, Response } from "express";
import Image from "../models/image.model";

const deleteImageController = (req: Request, res: Response) => {
  if (req.body.id) {
    Image.findById(req.body.id).then((image) => {
      if (image?.get("password") === req.body.password) image?.remove();
      else res.status(400).json({ msg: "delete denied" });
    });
  } else res.status(400).json({ msg: "fill the field" });
};

export default deleteImageController;
