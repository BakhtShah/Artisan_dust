// const mongoose= require("mongoose");
import mongoose from "mongoose";
// const bcrypt =require('bcryptjs');
// const jwt = require("jsonwebtoken");
const userSchema= new mongoose.Schema({
   name:{
    type: String,
    required:true,
    trim:true,
   }, 

   email:{
    type: String,
    required:true,
    // trim:true,
    unique:true,
   },

   password:{
    type: String,
    required:true,
    // trim:true,
   },

   phone:{
    type: String,
    required:true,
    // trim:true,
   },
   address:{
    type: {},
    required:true,
    // trim:true,
   },
answer:{
type: String,
required: true
},
   role:{
    type: Number,
    default:0,
   }
},{timestamps:true});

export default mongoose.model ('art_products', userSchema);