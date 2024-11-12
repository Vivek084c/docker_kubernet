const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send("<h2> hi there ...! vivek sadg </h2>")
});


const port = process.env.port || 5555;

app.listen(port, ()=>console.log(`listening on the port : ${port}`));
