const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    category: { type: [String], required: true },
    tags: { type: [String], default: [] },
    images: { type: [String], required: true },
    color: { type:[String], default:[]},
    size: { type: String, required: true },
    brand: { type: String, required: true },
    status: { type: String, required: true, enum: ["active", "inactive"] },
    
    stock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    quantitySold: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deletedAt: { type: Date },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
