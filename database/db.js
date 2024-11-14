const mongoose = require('mongoose');


const conexionDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            socketTimeoutMS: 1000
          });
        
    } catch (error) {
        throw new Error(error);
    }

}


module.exports = {conexionDb};
