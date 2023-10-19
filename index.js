const express = require('express');
const PORT=3000;
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const loginRouter= require("./router/auth.router");

const app=express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);


app.listen(process.env.PORT || PORT, ()=>{
    console.log("server started....")
})