import express from "express"

const portfolio = express();
const port = 3000;

portfolio.listen(port, () => {
  console.log(`Server running on ${port}.`)
});

portfolio.get("/", (req, res) => {
  res.send("<h1>Ahaaaan bokkale ni pani nv choosuko vruhhh</h1>");
});

portfolio.post("/register", (req, res) => {
  res.sendStatus(201);
});

portfolio.put("/user/shashi", (req, res) => {
  res.sendStatus(200);
});

portfolio.patch("/user/shashi", (req, res) => {
  res.sendStatus(200);
});

portfolio.delete("/user/shashi", (req, res) => {
  res.sendStatus(200);
});