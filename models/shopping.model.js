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
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    cvc: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('ShoppingModel', shoppingSchema);
