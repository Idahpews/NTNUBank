const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();

// New Customer Route
router.get('/insert', (req, res) => {
    res.render('pages/insertCustomer', { customer: new Customer() });
})


// Insert New Customer Route
router.post('/', async (req, res) => {

    const { personalNum, accountNum, fname, lname, dateofbirth, city } = req.body;

    const customer = new Customer({
        personal_number: personalNum,
        account_number: accountNum,
        firstName: fname,
        lastName: lname,
        date_of_birth: dateofbirth,
        city: city
    })

    try {
        const newCustomer = await customer.save;
        res.redirect('/');
    } catch {
        res.render('/customers', {
            errorMessage: 'Error inserting customer'
        })
    }
})

module.exports = router;