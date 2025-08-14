import Product from "../models/ProductModel.js";
import ProductSchema from "../schemas/ProductSchema.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      success: true,
      data: products,
      message: "Product Fetched Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
// getDetailProduct
const getDetailProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json({
    success: true,
    data: product,
    message: "Product detail Fetched Successfully",
  });
};
// CreateProduct
const createProduct = async (req, res) => {
  try {
    const { error } = ProductSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({
        success: false,
        message: errors,
      });
    }
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// updateProduct
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: product,
      message: "Product Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
// deleteProduct
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: product,
    message: "Product delete Successfully",
  });
};

export {
  getProduct,
  getDetailProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
