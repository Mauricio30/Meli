const fetch = require('node-fetch');

const getHttp = async (endpoint) => {
    const response = await fetch(endpoint);
    return response.json();
}

module.exports = getHttp;