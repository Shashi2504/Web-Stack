import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 5000;

app.post("/Send Transmission", (req, res) => {
    console.log(req.body)
})

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {

    console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})