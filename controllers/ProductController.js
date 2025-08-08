const getProduct = async (req, res) => {
  res.send("Lấy danh sách sản phẩm");
};
// getDetailProduct
const getDetailProduct = async (req, res) => {
  const id = req.params.id;
  res.send(`Lấy chi tiết sản phẩm có id là ${id}`);
};
// CreateProduct
const createProduct = async (req, res) => {
  res.send("Thêm sản phẩm");
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
