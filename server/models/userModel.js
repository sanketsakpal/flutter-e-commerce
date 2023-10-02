const mongoose = require("mongoose");
const { productSchema } = require("./productModel");

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: function (val) {
                const re =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                return val.match(re);
            }
            , message: 'please enter a valid email address'
        }

    },
    password: {
        required: true,
        type: String,
        trim: true,

    },
    address: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'user'
    },

    // cart 

    cart: [
        {
          product: productSchema,
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
});

const user = mongoose.model('User',userSchema);
module.exports = user;