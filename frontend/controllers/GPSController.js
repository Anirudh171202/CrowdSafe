const GPS = require('../models/GPS');

exports.getNewData = async (req, res, next) => {
    // generate latitude
    const mask = (Math.random() > 0.5) ? 1 : -1;
    let vals = req.query.vals;

    var [x, y, z, peopleCount] = vals.split("a");
    [x, y, z, peopleCount] = [parseInt(x), parseInt(y), parseInt(z), parseInt(peopleCount)]
    
    x = (x === 0) ? 1 : x
    y = (y === 0) ? 1 : y
    z = (z === 0) ? 1 : z

    x += mask * Math.random() * x;
    y += mask * Math.random() * y;
    z += mask * Math.random() * z;
    peopleCount = Math.floor((parseInt(peopleCount)) - ((Math.random() * 5) * mask))
    
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