const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const gpsSchema = new Schema({
    latitude: Number,
    longitude: Number,
    peopleCount: Number
})

const GPS = mongoose.model('GPS', gpsSchema)

module.exports = GPS;