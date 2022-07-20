const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    email_address: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Data', userSchema);