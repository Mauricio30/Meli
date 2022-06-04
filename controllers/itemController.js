const getHttp = require('../services/apiService')
const { itemAndDescriptionModel } = require('../models/itemModel');
const { endpointSearchItem, endpointDescription } = require('../constants/constants');

const createResponse = (items, itemDescription) => {
    const newItem = JSON.parse(JSON.stringify(itemAndDescriptionModel));
    const {
        id,
        title,
        price: amount,
        currency_id : currency,
        pictures,
        condition,
        shipping: {
            free_shipping
        },
        sold_quantity
    } = items;
    const { plain_text: description } = itemDescription;
    newItem.item = {
        id,
        title,
        price: {
            currency,
            amount,
            decimals: ''
        },
        picture: pictures[0].secure_url,
        condition,
        free_shipping,
        sold_quantity,
        description
    }
    return newItem;
}

const itemController = async (request, response) => {
    const id = request.params.id;
    const item = await getHttp(endpointSearchItem(id));
    const description = await getHttp(endpointDescription(id));
    const itemResponse = createResponse(item, description);
    response.status(200).json(itemResponse);
}

module.exports = itemController;