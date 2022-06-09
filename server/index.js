import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { readFileSync } from "fs";
import App from "../client/App";

const app = new express();
app.use(express.static("dist"));

app.get("/", async (req, res) => {
  const index = readFileSync("index.html", "utf-8");
  const rendered = ReactDOMServer.renderToString(<App />);
  res.send(index.replace("{content}", rendered));
  //   res.render(index);
});
app.listen(3001, () => {
  console.info("App is listening");
});
