const { default: mongoose } = require("mongoose")
const config = require("../config/db.config")
mongoose.Promise = global.Promise;


const db = {};
db.mongoose = mongoose;
db.url = config.url;

db.Shake = require("./shakemodel")(mongoose);


module.exports = db;