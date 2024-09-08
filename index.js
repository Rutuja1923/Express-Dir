const express = require("express");
const app = express();

let port = 8080;

//console.log(app);

app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("Request Recieved");
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><li>Kiwi</li><li>Pineapple</li></ul>"
    res.send(code);
});