const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/home", (req, res) => {
  return res.json({ msg: "Homecoming" });
});
app.get("/info", (req, res) => {
  return res.json({ msg: "Information" });
});
app.get("/about", (req, res) => {
  return res.json({ msg: "About" });
});

app.listen(process.env.PORT, () => {
  console.log("Started the server at PORT ", process.env.PORT);
});
