const express = require('express')
const router = express.Router()
const db = require('../controllers/OrdersController')

/* GET orders listing. */
router.get('/', (req, res, next) => {
    res.send('Orders management!');
});

//Orders CRUD
router.get('/:id', db.getOrderbyId)
router.get('/:order_code', db.getOrderbyOrderCode)
router.get('/:order_type', db.getOrderbyOrderType)
router.get('/:order_status', db.getOrderbyStatus)
router.put('/:id', db.updateOrder)
router.delete('/:id', db.deleteOrder)

module.exports = router;