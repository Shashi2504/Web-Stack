import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";

const directoryName = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var bandName = ""

function bandNameGenerator (req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.use(bandNameGenerator);


app.get("/", (req, res) => {
  res.sendFile(directoryName + "/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1> <h2>${bandName}</h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});