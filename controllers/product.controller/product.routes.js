const express = require('express');
const router = express.Router();

//GET /api/v1/products
router.use('/api/v1', require('./get.products'));

//GET /api/v1/product/:id
router.use('/api/v1', require('./get.product'));

//POST /api/v1/product
router.use('/api/v1', require('./post.product'));

//PUT /api/v1/product/:id
router.use('/api/v1', require('./put.product'));

//PATCH /api/v1/product:id
router.use('/api/v1', require('./patch.product'));

//DELETE /api/v1/product:id
router.use('/api/v1', require('./delete.product'));

module.exports = router;