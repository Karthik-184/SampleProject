const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var truecallerUserSchema = new Schema({
    phone                             : { type: String, required: true, unique : true},
    name                              : { type: String, required: true},
    location                          : { type: String},
    email                             : { type: String},
    updated_by                        : { type:String, default: require('os').hostname()},
},{ timestamps: true })

module.exports = mongoose.model("truecallerUser", truecallerUserSchema);