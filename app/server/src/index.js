import express from "express";
import { printRequest } from "./middleware";
const app = express();

app.post("/", printRequest, function (req, res) {
  res.send("Hello World");
});

export default app;
