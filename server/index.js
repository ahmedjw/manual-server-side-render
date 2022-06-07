const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("<h1>Hello From Node</h1>");
});

app.listen("3112");
console.info("server is listening");
