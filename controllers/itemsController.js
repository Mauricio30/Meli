const getHttp = require('../services/apiService')
const { itemModel } = require('../models/itemModel');
const { itemsModel } = require('../models/itemsModel');
const { endpointSearchItems, categoryId, initialPathInValues, maxResult } = require('../constants/constants')

const searchCategory = (categories) => {
    console.log(categories);
    let categoriesName = new Array();
    const category = categories[0];
    category.values[initialPathInValues].path_from_root.map(path => {
        categoriesName.push(path.name);
    });
    return categoriesName;
}

const getCategory = async (id) => {
    const category = await getHttp(endpointSearchItems(categoryId, id));
    return category.filters;
}

const createResponse = async (items) => {
    console.log(itemsModel);
    const itemsList = JSON.parse(JSON.stringify(itemsModel));
    items.results.map((result => {
        const {
            id,
            title,
            price: amount,
            currency_id: currency,
            thumbnail: picture,
            condition,
            shipping: {
                free_shipping
            },
            sold_quantity
        } = result;
        itemsList.items.push({
            id,
            title,
            price: {
                currency,
                amount,
                decimals: ''
            },
            picture,
            condition,
            free_shipping,
            sold_quantity
        })
    }));
    if (items.filters.length > 0) itemsList.categories = searchCategory(items.filters);
    else {
        const categoryObject = items.available_filters.filter(cat => cat.id === categoryId)[0];
        const maxvalue = Math.max.apply(null, categoryObject.values.map(item => item.results));
        const idCategory = categoryObject.values.find(cat => cat.results === maxvalue).id;
        const category = await getCategory(idCategory);
        itemsList.categories = searchCategory(category);
    }
    return itemsList;
}

const itemsController = async (request, response) => {
    const { q } = request.query;
    if (!q) response.status(400).send('Debes ingresar un valor para consultar!');
    const items = await getHttp(endpointSearchItems('q', q));
    const itemsResponse = await createResponse(items);
    response.status(200).json(itemsResponse);
}

module.exports = itemsController;