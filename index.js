require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV) {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "client", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send('Please run "npm run build" to build the frontend');
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
