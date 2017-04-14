var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoppingSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('ShoppingModel', shoppingSchema);
