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

app.get("/home",(req,res)=>{
    res.send("You contacted home path");
});

app.get("/help",(req,res)=>{
    res.send("You contacted help path");
});

app.get("/user",(req,res)=>{
    res.send("You contacted User path");
});

app.get("*",(req,res)=>{
    res.send("This path does not exist");
});

app.post("/",(req,res)=>{
    res.send("You sent a POST request to root");
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

// app.use((req,res)=>{
//     console.log("Request Recieved");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><li>Kiwi</li><li>Pineapple</li></ul>"
//     res.send(code);
// });