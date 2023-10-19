const express = require('express');
const PORT=3000;
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const categoriesRouter = require("./router/categories.router");
const {loginRouter, signupRouter}= require("./router/auth.router");
const routeNotFound = require("./middleware/routNotFound");

const app=express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello geeks");
})

app.use("/categories", categoriesRouter)
app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotFound);


app.listen(process.env.PORT || PORT, ()=>{
    console.log("server started....")
})