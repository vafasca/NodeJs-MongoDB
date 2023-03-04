var express = require("express");
var router = express.Router();

const Product = require("../../models/products.model");

/* POST users listing. */
router.patch("/product/:id", async (req, res, next) => {
  try {
    const { name, price, details } = req.body;
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          price,
          details,
        },
      },
      { new: true }
    );
    res.json({
      message: "Product updated",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
});

module.exports = router;
