const express = require('express');
const router = express.Router();
const additemController = require('./addItemController');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ message: 'hello' }
    );
});

router.post('/:cartid', additemController.addTocart);
router.get('/:cartid', additemController.getCart);
router.delete('/:cartid/:productid', additemController.removeItem);

module.exports = router;