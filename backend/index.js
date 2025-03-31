const express = require('express')
const app = express()
           
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT ||8000  
const router=require("./routes/route.js")
const path=require("path")
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));



mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("mongodb connected");
  
})



const _dirname=path.resolve();

app.use(express.json());

app.use("/api", router);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


