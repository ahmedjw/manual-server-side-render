import express from "express";
const app = new express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Node</h1>");
});
app.listen(3112);
console.info("App is listening");
