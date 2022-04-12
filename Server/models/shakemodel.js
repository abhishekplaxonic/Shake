var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    imgFirst:
    {
        data: Buffer,
        contentType: String
    },
    imgSecond:
    {
        data: Buffer,
        contentType: String
    },
    imgThird:
    {
        data: Buffer,
        contentType: String
    },imgFourth:
    {
        data: Buffer,
        contentType: String
    }
});
  

  
module.exports = new mongoose.model('Image', imageSchema);