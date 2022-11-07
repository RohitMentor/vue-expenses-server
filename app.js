const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const ExpenseApi=require("./controller/expense.api")

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/expense",ExpenseApi)

app.listen(3000, function () {
    mongoose.connect("mongodb+srv://yogesh12:yogesh123@cluster0.okpmpbx.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Server started on port 3000");
    
  });