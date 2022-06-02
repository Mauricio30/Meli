

const itemsController = (request, response) => {
    const query = request.query;
    console.log(query);
    response.send(`Id ${query.q}`);
}

module.exports = itemsController;