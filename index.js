const express = require('express');
const router = express.Router();
const app = express();
var cors = require('cors')
const itemsController = require('./controllers/itemsController');
const itemController = require('./controllers/itemController');
app.use(cors());
app.options('*', cors());

router.get('/api/items', itemsController);
router.get('/api/items/:id', itemController);

app.use(router);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});