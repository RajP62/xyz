const data = require("../db.json");

const express = require("express");
const app = express();

app.use(express.json());
app.get("/data",async(req,res)=>{
    try{
        res.send(data);
    }
    catch(e){
        res.send(e);
    }
});

app.listen(4000,async()=>{
    console.log("Server is running on port 4000");
})



