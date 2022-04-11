const express=require('express');
var imgModel = require('./models/index');

var app = express();
var fs = require('fs');
var path = require('path');


var multer = require('multer');
var storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, 'uploads')
    },
    filename:(req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now())
    }
})

var upload  = multer({storage:storage})

app.post('/post', upload.array('image'), (req, res, next) => {
  
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        imgFirst: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        imgSecond: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        imgThird: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        imgFourth: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
      
    }
    console.log(req.files)
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            // res.redirect('/');
        }
    });
});



