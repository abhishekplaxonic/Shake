let express = require('express');
let mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
let multer = require('multer');
let router = express.Router();

const DIR = './public/';
let File = require('../models/file');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

router.post('/multi-images-upload', upload.any(), (req, res) => {

    if (!req.body && !req.files) {
      res.json({ success: false });
    } else {
      let c;
      File.findOne({}, (err, data) => {
  
        if (data) {
          c = data.unique_id + 1;
        } else {
          c = 1;
        }
  
        let detail = new File({
  
          unique_id: c,
          text: req.body.text,
          image1: req.files[0] && req.files[0].filename ? req.files[0].filename : '',
          image2: req.files[1] && req.files[1].filename ? req.files[1].filename : '',
          image3: req.files[2] && req.files[2].filename ? req.files[2].filename : '',
          image4: req.files[3] && req.files[3].filename ? req.files[3].filename : '',
        });
  
        detail.save((err, Person) => {
          if (err)
            console.log(err);
          else
          res.status(201).json({
              message:"uploaded",   
           })
  
        });
  
      }).sort({ _id: -1 }).limit(1);
  
    }
  });



router.get("/", (req, res, next) => {
    File.find().then(response => {
        res.status(200).json({
            message: "Images fetched!",
            posts: response
        });
    });
});

module.exports = router;