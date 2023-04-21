const mongoose = require('mongoose');

uri = process.env.MONGODB_URL

const connectDB = () =>{
    console.log('Connected to Mongodb')
    return mongoose.connect(uri, {        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB

