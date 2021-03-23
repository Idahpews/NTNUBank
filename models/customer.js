const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    personal_number: {
        type: Number,
        required: true,
        unique: true
    },
    account_number: {
        type: Number,
        required: true,
        default: function () {
            return (number = Math.floor(Math.random() * 8999999999 + 10000000000));
        }
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', customerSchema);