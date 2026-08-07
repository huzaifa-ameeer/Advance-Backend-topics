import express from "express"
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.get("/", (req, res)=>{
    return res.json({
        message: "Server working"
    })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port:  ${port}`)
})