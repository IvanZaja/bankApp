const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

const accountSchema = new Schema(
    {
        owners: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        accountNumber: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: 'Cuenta Corriente',
        },
        type: {
            type: String,
            enum: ['Individual', 'Compartida'],
            default: 'Individual',
        },
        balance: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
);

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;