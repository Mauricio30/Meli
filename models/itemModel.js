const { authorModel } = require('./authorModel');

const itemModel = {
    id: String,
    title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
};

const description = String;

const itemAndDescriptionModel = {
    author: authorModel,
    item: {
        ...itemModel,
        categories: Array(),
        description
    }
}

module.exports = {
    itemAndDescriptionModel,
    itemModel
}