const GPS = require('../models/GPS');

exports.getNewData = async (req, res, next) => {
    // generate latitude
    const mask = (Math.random() > 0.5) ? 1 : -1;
    
    const latitude = mask * Math.random() * 90;
    const longitude = mask * Math.random() * 180;
    const peopleCount = 300 - ((Math.random() * 5) * mask)
    
    const doc = await GPS.create({
        latitude,
        longitude,
        peopleCount
    })
    
    res.status(200).json({
        data: doc,
        message: 'success'
    })
}

exports.deleteAllData = async (req, res, next) => {
    const doc = await GPS.deleteMany({});

    res.status(200).json({
        data: doc,
        message:"success"
    })
}