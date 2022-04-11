var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    imgFirst:
    {
        data: Buffer,
        contentType: 'image/png'
    },
    imgSecond:
    {
        data: Buffer,
        contentType: 'image/png'
    },
    imgThird:
    {
        data: Buffer,
        contentType: 'image/png'
    },imgFourth:
    {
        data: Buffer,
        contentType: 'image/png'
    }
});
  

  
module.exports = new mongoose.model('Image', imageSchema);