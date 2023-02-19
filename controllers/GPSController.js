const GPS = require('../models/GPS');

exports.getNewData = async (req, res, next) => {
    // generate latitude
    const mask = (Math.random() > 0.5) ? 1 : -1;
    let { vals } = req.params;

    var [x, y, z, peopleCount] = vals.split("a");
    
    x += mask * Math.random();
    y += mask * Math.random();
    z += mask * Math.random();
    peopleCount += (Math.random() > 0.5) ? 0 : mask
    
    const doc = await GPS.create({
        x,
        y,
        z,
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