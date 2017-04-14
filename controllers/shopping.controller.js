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
            res.json({
                success: true,
                message: 'Data saved in database. Please view the data at https://theamaze.space/shopping'
            })
        }
    });

};

module.exports.showData = function (req, res, next) {

    var query = ShoppingModel.find();
    query.sort('date');

    query.exec(function (err, result) {
        res.render('shopping', {
            results: result
        })
    });

};