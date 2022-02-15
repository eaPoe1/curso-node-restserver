const { request, response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { addListener } = require('../models/usuario');
const { validationResult } = require('express-validator');
const { validateEmail } = require('../helpers/dbValidators');

const userGET = async(req = request, res = response) => { 

    const query = {status: false}

    const { limite, desde = 0 } = req.query;

    const [total, usuario] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
        usuario
    });
}

const userPUT = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    if( password ) {

        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto, {new: true} );

    res.json(usuario);
}

const userPOST = async(req, res = response) => {
 
    const {name, email, password, role} = req.body; 
    const usuario = new Usuario({ name, email, password, role });

    // validad email 
    validateEmail( email );

    // encriptar pass
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // guardar db
    await usuario.save();

    res.json(usuario);
}

const userDELETE = async(req, res = response) => {

    const { id } = req.params;

    //borrar fisicamente
    // const usuario = await Usuario.findByIdAndDelete( id )


    const usuario = await Usuario.findByIdAndUpdate( id, {status: true})

    res.json({ usuario });
}

module.exports = {
    userGET,
    userPUT,
    userPOST,
    userDELETE
}