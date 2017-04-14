var ShoppingModel = require('../models/shopping.model');

module.exports.addData = function (req, res, next) {

    var firstName = req.body.firstName,
        lastName = req.body.lastName,
        productName = req.body.productName,
        productPrice = req.body.productPrice;

    var customerEntry = new ShoppingModel({
        firstName: firstName,
        lastName: lastName,
        productName: productName,
        productPrice: productPrice
    });

    customerEntry.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('data saved to db');
        }
    });

};