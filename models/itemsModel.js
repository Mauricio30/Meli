const { authorModel } = require('./authorModel');

const itemsModel = {
    author: authorModel,
    categories: Array(),
    items: Array()
}

module.exports = {
    itemsModel
}