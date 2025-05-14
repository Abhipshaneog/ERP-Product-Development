const express = require("express");
const { 
     getProducts,
     getProductDetails,
     addProduct,
     updateProduct,
     deleteProduct,
     } = require("../controllers/productController");

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductDetails);

// Admin Routes
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
