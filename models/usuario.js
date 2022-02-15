const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio']

    },
    email:{
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'El password es obligatorio']
    },
    image:{
        type: String
    },
    role:{
        type: String,
        required: true,
        // enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTA_ROLE']
    },
    status:{
        type: Boolean,
        // here is true, it is not false >:p
        default: false
    },
    google:{
        type: Boolean,
        default: false 
    }

});


userSchema.methods.toJSON = function() {
    //quita el pass y la version del esquema(los elimina de la vista)
    const { __v, password, ...newUserSchema } = this.toObject();
    return newUserSchema;
}

module.exports = model('Usuario', userSchema);