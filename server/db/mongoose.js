var mongoose = require('mongoose');

//mongoose config
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose};

