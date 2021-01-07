import express from "express";
import {
  printRequest,
  accessControlAllowOrigin,
  generatePDF,
} from "./middleware";

const app = express();

app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", printRequest, generatePDF);

export default app;
