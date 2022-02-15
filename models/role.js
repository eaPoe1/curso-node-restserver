const { Schema, model } = require('mongoose');

const RoleSchema = Schema({

    role: {
        type: String,
        required: [true, 'El rol no existe en la base de datos']
    }

});

module.exports = model('Role', RoleSchema);