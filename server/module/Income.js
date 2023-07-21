const moongose = require("mongoose");

const IncomeSchema = new moongose.Schema({
    title:{
        type: String,
        required : true,
        trim : true, 
        maxLength : 50 
    },
    amount:{
        type: Number,
        required : true,
        trim : true,
        maxLength : 20 
    },
    type:{
        type: String,
        default:'income'
    },

    date:{
        type:Date,
        required : true,
        trim : true
    },
    category:{
        type:String,
        required : true,
        trim : true
    },
    description:{
        maxLength:20,
        type:String,
        required : true,
        trim : true
    }}
    ,{timestamps:true})

    module.exports = moongose.model('Income' , IncomeSchema);