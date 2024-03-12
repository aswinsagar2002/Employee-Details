const mongoose = require('mongoose')
const crudschema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        unique:true,
        required:true,
        dropDups: true
    }
})

module.exports=mongoose.model('values',crudschema)