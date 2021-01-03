import express from "express";
import {
  printRequest,
  accessControlAllowOrigin,
  generatePDFMW,
} from "./middleware";

const app = express();

app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", printRequest, generatePDFMW, function (req, res) {
  res.send("Hello World");
});

export default app;
