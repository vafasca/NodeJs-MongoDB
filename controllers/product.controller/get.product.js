var express = require('express');
var router = express.Router();

const Product = require('../../models/products.model');

/* GET users listing. */
router.get('/product/:id', async (req, res, next) => {
  try {
    //const data = await Product.find({_id: req.params.id});
    const data = await Product.findById(req.params.id);
    res.json({data});
  } catch (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack
    })
  }
});

module.exports = router;
