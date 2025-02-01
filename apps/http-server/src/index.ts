import express from "express";

const app = express();



app.get("/signup", (req, res) => {
    res.send("signup");
});

app.get("/signin", (req, res) => {
    res.send("signin");
});

app.get("/chat", (req, res) => {
    res.send("chat");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});