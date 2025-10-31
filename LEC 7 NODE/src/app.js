const express = require("express")

const app = express()

app.get("/",(req, res)=>{
    console.log(req);
    console.log("request aayi");
    res.send("Home Page")
})

module.exports = app
