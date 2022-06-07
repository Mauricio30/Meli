const getHttp = require('../services/apiService');
const { endpointSearchItems, categoryId, initialPathInValues } = require('../constants/constants');

const getCategory = async (id) => {
    const category = await getHttp(endpointSearchItems(categoryId, id));
    return category.filters;
}

const searchCategory = (categories) => {
    let categoriesName = new Array();
    const category = categories[0];
    category.values[initialPathInValues].path_from_root.map(path => {
        categoriesName.push(path.name);
    });
    return categoriesName;
}

module.exports = {
    getCategory,
    searchCategory
}