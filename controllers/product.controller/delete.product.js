var express = require('express');
var router = express.Router();

const Product = require('../../models/products.model');

/* POST users listing. */
router.delete('/product/:id', async (req, res, next) => {
  try {
    const data = await Product.findOneAndDelete(req.params.id);
    res.json({
      message: "Product deleted",
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
