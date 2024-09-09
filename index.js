const express = require("express");
const app = express();

let port = 8080;

//console.log(app);

app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
});

app.get("/",(req,res)=>{
    res.send("You contacted root path");
});

app.get("/users",(req,res)=>{
    res.send("You contacted Users path");
});

app.get("*",(req,res)=>{
    res.send("This path does not exist");
});
