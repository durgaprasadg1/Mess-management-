const mongoose = require("mongoose")
const reviewSchema = new mongoose.Schema({
    feedback :{
        type : String,
        minLength:3
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max : 5
    },
    author :{
        type : Schema.Types.ObjectId,
        ref : "Consumer"
    }
},{timestamps:true})

module.exports = mongoose.model("Review", reviewSchema)