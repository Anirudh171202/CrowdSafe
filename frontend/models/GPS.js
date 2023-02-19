const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const gpsSchema = new Schema({
    x: Number,
    y: Number,
    z: Number,
    peopleCount: Number
})

const GPS = mongoose.model('GPS', gpsSchema)

module.exports = GPS;