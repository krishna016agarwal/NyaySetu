
const mongoose = require('mongoose');
const lawyerSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        trim: true, 

    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim: true, 
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:30
    },
    registrationNumber:{
        type:Number,
        require:true,
    },
    yearofExperience:{
        type:Number,
        require:true,
        default:1
    },
    contactNo:{
        type:Number,
        require:true,
    },
    officeAddress:{
        type:String,
        require:true,
    },
    lawFirm:{
        type:String,
        require:true,
    },
    currentPosition:{
        type:String,
        require:true,
    },
    practiceAreas:{
        type:String,
        require:true,
    },
    Education :{
        type:String,
        require:true,
    }
    

  },
{timestamps:true});


  const Lawyer = mongoose.model('Lawyer', lawyerSchema);

  module.exports=Lawyer;
