var express = require('express');
var router = express.Router();

const Product = require('../../models/products.model');

/* GET users listing. */
router.get('/products', async (req, res, next) => {
  try {
    const data = await Product.find({});
    res.json({data})
  } catch (error) {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
  }
});

module.exports = router;
