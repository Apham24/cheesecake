var express = require('express');
var router = express.Router();

order0 = {topping:"cherry", quantity:"2"};
order1 = {topping:"chocolate", quantity:"3"};
order2 = {topping:"plain", quantity:"6"};
orders = {order0, order1, order2};

/* GET users orders. */ 
router.get('/', function(req, res, next) {
   res.send( JSON.stringify(orders));
});
module.exports = router;
