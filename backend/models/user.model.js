const mongoose = require('mongoose');

const schema =  mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        minlenght: 3
    },
}, {
    timstamps: true,
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;