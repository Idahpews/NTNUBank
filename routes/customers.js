const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();

// All customers Route
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find({ });
        res.render('customers/index', { customers: customers });
    } catch (error) {
        res.redirect('/');
    }
});


// New Customer Route
router.get('/insert', (req, res) => {
    res.render('customers/insert', { customer: new Customer() });
});

// Insert New Customer Route
router.post('/', async (req, res) => {
    const { personalNum, fname, lname, dateofbirth, city } = req.body;

    const customer = new Customer({
        personal_number: personalNum,
        firstName: fname,
        lastName: lname,
        date_of_birth: new Date(dateofbirth),
        city: city
    });

    try {
        const newCustomer = await customer.save();
        res.redirect(`customers/${newCustomer.personal_number}`);
    } catch {
        res.render('customers/insert', {
            customer: customer,
            errorMessage: 'Error inserting customer'
        });
    }
});

// View One Customer Route
router.get('/:personal_number', async (req, res) => {
    try {
        //const customer = await Customer.findById(req.params.id);
        const customer = await Customer.findOne({
            personal_number: req.params.personal_number
        });
        res.render('customers/view', {
            customer: customer
        });
    } catch {
        res.redirect('/');
    }
})

// Update Customer Route
router.get('/:personal_number/update', async (req, res) => {
    try {
        //const customer = await Customer.findById(req.params.id)

        const customer = await Customer.findOne({
            personal_number: req.params.personal_number
        });

        res.render('customers/update', { customer: customer });
    } catch {
        res.redirect('customers')
    }
});

router.put('/:personal_number', async (req, res) => {
    let customer;

    try {
        //customer = await Customer.findById(req.params.id);

        const customer = await Customer.findOne({
            personal_number: req.params.personal_number
        });

        /*const { personalNum, fname, lname, dateofbirth, city } = req.body;
        const { personal_number, firstName, lastName, date_of_birth, city } = customer;

        customer = {
            personal_number: personalNum,
            firstName: fname,
            lastName: lname,
            date_of_birth: new Date(dateofbirth),
            city: city
        };*/

        customer.personal_number = req.body.personalNum;
        customer.firstName = req.body.fname;
        customer.lastName = req.body.lname;
        customer.date_of_birth = new Date(req.body.dateofbirth);
        customer.city = req.body.city;

        await customer.save();
        res.redirect(`/customers/${customer.personal_number}`);
    } catch {
        if (customer == null) {
            res.redirect('/');
        } else {
            res.render('customers/update', {
                customer: customer,
                errorMessage: 'Error updating customer'
            });
        }
    }
})

// Delete Customer Route
router.delete('/:personal_number', async (req, res) => {
    let customer;

    try {
        //customer = await Customer.findById(req.params.id);

        customer = await Customer.findOne({
            personal_number: req.params.personal_number
        });

        await customer.remove();
        res.redirect('/customers');
    } catch {
        if (customer == null) {
            res.redirect('/');
        } else {
            res.redirect(`customers/${customer.personal_number}`);
        }
    }
});

module.exports = router;