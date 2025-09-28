require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// koi apna url dalo atlas ka cause mene already use kiy h aur free wala option nhi h
mongoose.connect("mongodb://127.0.0.1:27017/MessProj")
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.log(" MongoDB Connection Failed", err))

app.listen(3000, _=>console.log(` Server running at http://localhost:3000`))