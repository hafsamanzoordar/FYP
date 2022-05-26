const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    donationImage:
    {
        type:String,
        required:true,
    },
},{timestamps: true});

const Image = mongoose.model('Image',imageSchema);
module.exports = Image;