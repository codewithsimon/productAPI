const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, 'price must be provided']
    },
    featured: {
        type: Boolean,
        default: false,
    },
    ratings: {
        type: Number,
        default: 4.7,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,       
    }
})

module.exports = mongoose.model('Product', productsSchema)
