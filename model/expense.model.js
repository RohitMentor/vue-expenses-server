const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Expense = new Schema({
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    }
})

module.exports = mongoose.model('Expense', Expense)