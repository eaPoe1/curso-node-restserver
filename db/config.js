const mongoose = require('mongoose');
require('colors');

const connectDB = async() => {

    try {
        
        mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
             
        });

        console.log('Bases de datos online'.cyan);
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la base de datos');
    }

}



module.exports = {
    connectDB
}