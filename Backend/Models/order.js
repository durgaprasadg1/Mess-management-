const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    consumer: {
      type: Schema.Types.ObjectId,
      ref: "Consumer",
      required: true,
    },
    mess: {
      type: Schema.Types.ObjectId,
      ref: "Mess",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },

    razorpayOrderId: String,
    razorpayPaymentId:String,
    razorpaySignature: String,

    status: {
      type: String,
      enum: ["created", "pending", "paid", "failed"],
      default: "created",
    },

    paymentVerified: {
      type: Boolean,
      default: false,
    },

    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Order", orderSchema)