import express from "express"

const webapp = express();

const port = 5000;


webapp.get 

webapp.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

webapp.get("/portfolio", (req, res) => {
    res.send("<h1>On the way!!</h1>")
});

webapp.get("/", (req, res) => {
    res.send("<h1>Hello Man!!</h1>")
});

webapp.get("/about", (req, res) => {
    res.send("<h1>About Me!!</h1>")
});

webapp.get("/contact", (req, res) => {
    res.send(
        "<h1>Get in Touch</h1> <h2>Email: asdasda@gmail.com</h2>"
    );
});

