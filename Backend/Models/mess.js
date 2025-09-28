const mongoose = require('mongoose')
const messSchema = mongoose.Schema({
    name : {  
        type :String,
        required : true,
        minLength :3
    },
    description : {
        type : String
    },
    image :{
        url : {
            type:String
        },
        filename:String
    },
    address :{
        type : String
    },
    menu:[{
        type : String, 
        default : ""
    }],
    
    price :String,
    owner : {
        type : Schema.Types.ObjectId,
        ref:"Consumer"
    },
    reviews : [
    {
      type : Schema.Types.ObjectId,
      ref : "Review"
    }
  ],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order"
  }],
  category : {
    type  : String,
    required: true,
    minLength:2
  },
  ownerName: {
  type: String,
  required: true
  },
  phoneNumber: {
    type: String,   
    required: true,
    match: /^\d{10}$/ 
  },
  lattitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180
  }
})
module.exports = mongoose.model("Mess",messSchema)