var express = require('express');
var router = express.Router();

const Product = require('../../models/products.model');

/* POST users listing. */
router.post('/product', async (req, res, next) => {
  try {
    const {name, price, details} = req.body;
    const product = new Product({name, price, details});
    const data = await product.save();
    res.json({
      message: "Product created",
      data
    })
  } catch (error) {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
  }
});

module.exports = router;
