const expree = require("express")

const app  = expree();
const PORT = process.env.PORT || 8000

app.get('/', (req, res)=>{
    return res.json({message : "hellow i am node js in container"});
})


app.listen(PORT, ()=>console.log("server started on port", PORT))