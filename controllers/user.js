const { response } = require('express');

const userGET = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const userPUT = (req, res = response) => {

    const {id} = req.params;

    res.json({ 
        msg: 'put API - controller',
        id
    });
}

const userPOST = (req, res = response) => {
    res.json({
        msg: 'post API - controller'
    });
}

const userDELETE = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    userGET,
    userPUT,
    userPOST,
    userDELETE
}