const express = require('express');
const router = express.Router();
const additemController = require('./addItemController');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ message: 'hello' }
    );
});

router.post('/', additemController.addTocart);
router.get('/:carid', additemController.getCart);
router.delete('/:carid/:productid', additemController.removeItem);

module.exports = router;