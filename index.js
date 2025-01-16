require("dotenv").config();
const express = require("express");

const app = express();

app.post("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is listening on " + port);
});
