import Product from "../models/ProductModel.js";

const getProduct = async (req, res) => {
 const products = await Product.find();
 res.status(201).json({
    success: true,
    data: products,
    message: "Product Fetched Successfully"
  })

};
// getDetailProduct
const getDetailProduct = async (req, res) => {
  const id = req.params.id;
  res.send(`Lấy chi tiết sản phẩm có id là ${id}`);
};
// CreateProduct
const createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    success: true,
    data: newProduct,
    message: "Product Created Successfully"
  })
}












// updateProduct
const updateProduct = async (req, res) => {
  const id = req.params.id;
  res.send(`Sửa sản phẩm có id là : ${id} `);
}
// deleteProduct
const deleteProduct =  async (req, res) => {
  const id = req.params.id;
  res.send(`Xóa sản phẩm có id là : ${id}`);
}

export { getProduct, getDetailProduct, createProduct, updateProduct, deleteProduct };
