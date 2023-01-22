const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// Schema - structure to sent to MongoDB
const AuthUsersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Static method - signup
AuthUsersSchema.statics.signup = async function (email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not Valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    // Check if user email exists
    const exist = await this.findOne({ email });
    if (exist) {
        throw Error('Email already Exists');
    }

    // encript password
    const saltRounds = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltRounds);
    const Authuser = await this.create({ email, password: hash });

    return Authuser;
};

// Static method - login
AuthUsersSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    // Check if user email exists
    const validuser = await this.findOne({ email });
    if (!validuser) {
        throw Error('User does not exist - Incorrect Email');
    }

    // check if password matches with DB password for user
    const match = await bcrypt.compare(password, validuser.password);

    if (!match) {
        throw Error('Incorrect Password');
    }

    return validuser;
};

// 'AuthUsersSchema' is the object that mirrors the collection
// 'AuthUsers' is the name of the collection on mongoDB,

module.exports = mongoose.model('AuthUsers', AuthUsersSchema);