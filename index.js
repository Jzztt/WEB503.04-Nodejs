import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { ProductRouter } from "./routes/product.js";
import { BookRouter } from "./routes/book.js";
import { AuthRouter } from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/smartphone-shop");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
connectDatabase();

// app.get("/product",(req,res)=> {
//  res.send("product")
// })

app.use("/api", ProductRouter);

app.use("/api", BookRouter);

app.use("/", AuthRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Ung dụng đang chạy với port: http://localhost:${PORT}`);
});
