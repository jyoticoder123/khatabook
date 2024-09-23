const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minLength: 3,
    maxLenght: 20,
    required: true,
    unique: true,
  },
  name:{
    type: String,
    trim: true,
    required: true,
    
  },
  profilepicture:{
    type: String,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    trim: true,
    required: true,
  } ,
  password: {
    type: String,
    trim: true,
    required: true,
    select: false
  },
  hisaab: [{ type: mongoose.Schema.Types.ObjectId, ref: "hisaab" }],
});

module.exports = mongoose.model("User", userSchema);
