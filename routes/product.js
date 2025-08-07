import express from "express"

const router = express.Router();

router.get("/product", (req,res) => {
    res.send("Lấy danh sách sản phẩm")
})

router.get("/product/:id", (req,res) => {
    const id = req.params.id
    res.send(`Lấy chi tiết sản phẩm có id là ${id}`)
})

router.post("/product", (req,res)=> {
    res.send("Thêm sản phẩm");
})


router.put("/product/:id", (req,res)=> {
    const id = req.params.id
    res.send(`Sửa sản phẩm có id là : ${id} `);
})

router.delete("/product/:id", (req,res)=> {
    const id = req.params.id
    res.send(`Xóa sản phẩm có id là : ${id}`);
})

export const ProductRouter = router;