const express = require("express");
const app = express();

let port = 8080;

//console.log(app);

app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("Request Recieved");
});