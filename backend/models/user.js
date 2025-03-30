
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:30
    }
  });


  const User = mongoose.model('User', userSchema);

  module.exports=User;
