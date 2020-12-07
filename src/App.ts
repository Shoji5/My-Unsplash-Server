import mongoose from "mongoose";
import express, { Application } from "express";
import cors from "cors";
import notFound from "./middlewares/notFound.middleware";
import imageRoute from "./routes/image.route";

export default class Server {
  private app: Application;

  constructor(private port: number) {
    this.app = express();
    this.settings();
    this.middlewaresInput();
    this.routes();
    this.middlewaresOutput();
  }

  private settings(): void {
    mongoose.connect(
      "mongodb+srv://admin:admin@myunsplash.vutgw.mongodb.net/myunsplash?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("✅ connected mongoDB")
    );
  }

  private middlewaresInput(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api", imageRoute);
  }

  private middlewaresOutput(): void {
    this.app.use(notFound);
  }

  public start(): void {
    this.app.listen(this.port, () => console.log(`✅ server is running on http://localhost:${this.port}/`));
  }
}
