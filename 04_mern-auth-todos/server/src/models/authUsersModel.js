import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

// SCHEMA - structure to sent to MongoDB
const authUsersModelSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
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

// Static method - SIGNUP
authUsersModelSchema.statics.authUserSignup = async function (
    username,
    email,
    password
) {
    // Validation
    if (!username || !email || !password) {
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
        throw Error('Email already exists');
    }

    // encript password
    const saltRounds = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltRounds);
    const Authuser = await this.create({ username, email, password: hash });

    return Authuser;
};

// Static method - LOGIN
authUsersModelSchema.statics.authUserlogin = async function (email, password) {
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

export default mongoose.model('authUsersModel', authUsersModelSchema);
