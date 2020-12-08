import { Request, Response } from "express";
import Image from "../models/image.model";

const searchImageController = (req: Request, res: Response) => {
  Image.find({ label: new RegExp(req.params.label, "i") }, "label url")
    .sort("-_id")
    .then((images) => res.json(images));
};

export default searchImageController;
