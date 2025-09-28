const mongoose = require("mongoose")

const consumerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  mess: [{
    type: Schema.Types.ObjectId,
    ref: "Mess"
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order"
  }],
  phone: {
  type: String,
  required: true,
  match: /^[0-9]{10}$/
  }
})

module.exports = mongoose.model("Consumer",consumerSchema)