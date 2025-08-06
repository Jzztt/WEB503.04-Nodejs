import express from "express";
import bodyParser from "body-parser"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Respone send
app.get("/", (req,res) => {
    res.send("<h1>Home page</h1>")
})

app.get("/about", (req,res) => {
    res.send("About page")
})

// Response json + status
app.get("/category", (req,res) => {
    res.status(200).json({
        name: "Apple"
    })
})

// Request Params
app.get("/product/:id", (req,res)=> {
    console.log("id:", req.params.id);
})

// Request Query
app.get("/product", (req,res)=> {
console.log(req.query.q);
})

// Request Body
app.post("/create-product",(req,res)=> {
    console.log(req.body);
})

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Ung dụng đang chạy với port ${PORT}`);
})