const express = require('express');

const router = express.Router();
const userController = require('../../controllers/api/user_controller');
const orderController = require('../../controllers/api/order_controller');
const deliveryController = require('../../controllers/api/deliver_controller');
router.post('/register', userController.create);

router.post('/create', orderController.create);
router.post('/create-guy', deliveryController.createdeliveryGuy);
router.put('/delivered/:id', deliveryController.deliveryDone);

module.exports = router;