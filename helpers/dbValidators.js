
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const validateRole = async( role = '' ) => {
    const existeRole = await Role.findOne({ role });
    if( !existeRole ){
        throw new Error( `El rol ${ role } no es válido` );
    }
}


const validateEmail = async( email ) => {
    const existeEmail = await Usuario.findOne({ email });
    if( existeEmail ){
        throw new Error( `El email ${ email } ya esta registrado`);
        // return res.status(404).json({.
        //     msg: 'El email ya está registrado.'
        // });
    }
}

const validateUserId = async( id ) => {
    const existeUserId = await Usuario.findById( id );
    if( existeUserId ){
        throw new Error( `El id ${ id } no existe`);
        
    }
}


module.exports = {
    validateRole,
    validateEmail,
    validateUserId
}
