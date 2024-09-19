const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const Account = require('./account.model');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        typeId:{
            type: String,
            required: true,
            enum: ['DNI', 'NIE', 'Pasaporte'],
            default: 'DNI'
        },
        idNumber:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        money: {
            type: Number,
            default: 0
        },
        indebt: {
            type: Number,
            default: 0
        }
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
            }
        }
    }
)

userSchema.virtual('accounts', {
    ref: 'Account', 
    localField: '_id', 
    foreignField: 'owner', 
})

const User = mongoose.model('User', userSchema);
module.exports = User;