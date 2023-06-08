var mongoose = require('mongoose');
 
mongoose.connect("mongodb://127.0.0.1:27017/dbusers").then((res)=>{
    console.log("connected to database")

}).catch((err)=>{
    console.log("Some Issue while connected to database", err)
})

require("./models/User");

module.exports = mongoose;
