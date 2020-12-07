import { config } from "dotenv";
config();

export const port = Number(process.env.PORT);
export const mongoose_url = process.env.MONGOOSE_URL as string;
