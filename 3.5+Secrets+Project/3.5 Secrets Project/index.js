//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express"

import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const directoryName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;
var checkAuthorization = false;

app.use(bodyParser.urlencoded({extended: true}))

function secretsLogin (req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        checkAuthorization = true;
    }
    next();
}

app.use(secretsLogin);


app.get("/", (req, res) => {
    res.sendFile(directoryName + "/public/index.html")
})

app.post("/check", (req, res) => {
    if (checkAuthorization) {
        res.sendFile( directoryName + "/public/secret.html")
    } else {
        res.sendFile(directoryName + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Your server is running on ${port}`)
})