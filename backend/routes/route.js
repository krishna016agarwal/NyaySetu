const { allappointments } = require("../controllers/allapointments");
const { allclients } = require("../controllers/allclients");
const { alllawyers } = require("../controllers/alllawyer");
const { lawyerclient, appointment } = require("../controllers/lawyerclient");
const { lawyerdetails, updatelawyer } = require("../controllers/lawyerdetails");
const { lawyer } = require("../controllers/lawyersignup");
const { lawyerlogin } = require("../controllers/lawyserlogin");
const {  userlogin } = require("../controllers/userlogin");
const { user } = require("../controllers/usersignup");


const express = require("express");
const route = express.Router();

route.post("/usersignup",user)
route.post("/lawyersignup",lawyer)
route.post("/userlogin",userlogin)
route.post("/lawyerlogin",lawyerlogin)
route.post("/lawyerdetails",lawyerdetails)
route.post("/lawyerclient",lawyerclient)
route.get("/alllawyers",alllawyers)
route.post("/lawyerupdate/:id",updatelawyer)
route.get("/allclients/:id",allclients)
route.post("/appointment",appointment)
route.get("/allappointment/:id",allappointments)
module.exports=route;
