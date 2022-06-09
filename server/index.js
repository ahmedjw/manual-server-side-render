// const express = require("express");
import express from "express";
import { readFileSync } from "fs";
const app = new express();
app.use(express.static("dist"));

app.get("/", async (req, res) => {
  const index = readFileSync("index.html", "utf-8");
  console.log(index);
  res.send(index);
  //   res.render(index);
});
app.listen(3000, () => {
  console.info("App is listening");
});
