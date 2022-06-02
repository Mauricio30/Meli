const express = require('express');
const router = express.Router();
const app = express();
const itemController = require('./controllers/itemController');

router.get('/api/items/:id', itemController);

app.use(router);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});