const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fullname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }]
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;