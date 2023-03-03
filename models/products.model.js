const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true,
        trim: true
    }
});

const productModel = mongoose.model('Product', productModelSchema);
module.exports = productModel;