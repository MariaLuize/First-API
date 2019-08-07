const express = require("express"),
      app = express();


const port = 3000;
const ip = "localhost";

app.get('/', function(req,res){
    res.send("It's not alive!");
})


app.listen(port, ip, function(){
    console.log("My API foi inicializada...")
});