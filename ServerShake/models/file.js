const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
  
    text: String,
	image1:String,
	image2:String,
	image3:String,
    image4:String,
    // imagesArraySecond: {
    //     type: String
    // },
    // imagesArrayThird: {
    //     type: String
    // },
    // imagesArrayFourth: {
    //     type: String
    // },
    // productImage: [
    //     {
    //       imageUrl: {
    //         type: String,
    //         required: true
    //       }
    //     }
    //   ],

    // text: {
    //     type: String
    // }
}, {
    collection: 'files'
})

module.exports = mongoose.model('File', fileSchema)