const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

const api = require("./routes/api");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("build"));

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, function () {
  console.log(`server running...${PORT}`);
});
