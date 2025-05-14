const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, tags, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (minPrice || maxPrice) filter.price = { ...(minPrice && { $gte: minPrice }), ...(maxPrice && { $lte: maxPrice }) };
    if (tags) filter.tags = { $in: tags.split(",") };

    const skip = (page - 1) * limit;
    const products = await Product.find(filter).skip(skip).limit(parseInt(limit));
    const total = await Product.countDocuments(filter);

    res.json({ total, page: parseInt(page), products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product details by ID
exports.getProductDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, discount, category, tags, images, stock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      discount,
      category,
      tags,
      images,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product details by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};