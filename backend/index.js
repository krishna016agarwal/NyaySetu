const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require("cors");
const router=require("./routes/route.js")
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

app.use("/api", router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("mongodb connected");
    
})

