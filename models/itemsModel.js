const { authorModel } = require('./authorModel');

const itemsModel = {
    author: authorModel,
    categories: Array,
    items: Array[{
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number
        },
        picture: String,
        condition: String,
        free_shipping: Boolean
    }]
}

module.exports = {
    itemsModel
}