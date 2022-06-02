const getHttp = require('../services/apiService')
const { itemModel } = require('../models/itemModel');

// endpoint constants
const endpointSearchItems = (id) => `https://api.mercadolibre.com/items/${id}`;
const endpointDescription = (id) => `https://api.mercadolibre.com/items/${id}/description`

const createResponse = (items, itemDescription) => {
    const newItem = itemModel;
    const {
        id,
        title,
        price,
        currency_id,
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
            currency: currency_id,
            amount: price,
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
    const items = await getHttp(endpointSearchItems(id));
    const description = await getHttp(endpointDescription(id));
    const item = createResponse(items, description);
    console.log(id, items, description, item);
    response.status(201).json(item)
}

module.exports = itemController;