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

app.get("/users/:userName/:userId",(req,res)=>{
    const userName= req.params.userName;
    const userId = req.params.userId;
    console.log(`User ID is: ${userId}`);
    console.log(`User Name is: ${userName}`);
    let htmlStr = `<h1>Welcome ${userName}</h1>`;
    res.send(htmlStr);
});
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing Searched</h1>`);
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
});

app.get("*",(req,res)=>{
    res.send("This path does not exist");
});
