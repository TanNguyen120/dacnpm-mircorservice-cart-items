const additemService = require('./addItemService');

module.exports.addTocart = (req, res) => {
    const carid = parseInt(req.body.carid);
    const productid = parseInt(req.body.productid);
    const quantity = parseInt(req.body.quantity);
    additemService.addTocart(carid, productid, quantity);
}

module.exports.getCart = (req, res) => {
    const carid = parseInt(req.param.carid);
    const result = additemService.getCart(carid);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json({ message: 'Not found' });
    }
}


module.exports.removeItem = (req, res) => {
    const carid = parseInt(req.param.carid);
    const productid = parseInt(req.param.productid);
    const result = additemService.removeItem(carid, productid);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json({ message: 'Not found' });
    }
}