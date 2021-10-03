const mongoose = require('mongoose');

var Schtroumpf = mongoose.model('Schtroumpf', {
    login: { type: String },
    password: { type: String },
    age: { type: Number },
    family: { type: String },
    race: { type: String },
    food: { type: String }
});

module.exports = { Schtroumpf };