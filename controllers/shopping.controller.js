var ShoppingModel = require('../models/shopping.model');

module.exports.addData = function (req, res, next) {

    var firstName = req.body.firstName,
        lastName = req.body.lastName,
        productName = req.body.productName,
        productPrice = req.body.productPrice,
        cardName = req.body.cardname,
        cardNumber = req.body.cardnumber,
        cvc = req.body.cvc,
        expiryDate = req.body.expirydate,
        contact = req.body.contact,
        address = req.body.address;

    var customerEntry = new ShoppingModel({
        firstName: firstName,
        lastName: lastName,
        productName: productName,
        productPrice: productPrice,
        cardName: cardName,
        cardNumber: cardNumber,
        cvc: cvc,
        expiryDate: expiryDate,
        contact: contact,
        address: address
    });

    customerEntry.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('data saved to db');
            res.json({
                success: true,
                message: 'Data saved in database. Please view the data at https://theamaze.space/shopping'
            })
        }
    });

};

module.exports.showData = function (req, res, next) {

    var query = ShoppingModel.find();
    query.sort('field -createdOn');

    query.exec(function (err, result) {
        res.render('shopping', {
            results: result
        })
    });

};