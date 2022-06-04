// endpoint constants
const endpointSearchItems = (queryType, queryData) => `https://api.mercadolibre.com/sites/MLA/search?${queryType}=${queryData}`;
const endpointSearchItem = (id) => `https://api.mercadolibre.com/items/${id}`;
const endpointDescription = (id) => `https://api.mercadolibre.com/items/${id}/description`

const categoryId = 'category';
const initialPathInValues = 0;
const maxResult = 0;

module.exports = {
    endpointSearchItems,
    endpointSearchItem,
    endpointDescription,
    categoryId,
    initialPathInValues,
    maxResult
}