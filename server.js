import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoutes.js"
import productRoutes from './routes/productRoutes.js'
import cors from "cors";
// configure env
dotenv.config();
//connect db
connectDB();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRoute)
app.use("/api/v1/products",productRoutes)
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce!!!</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is runnign on ${PORT}`.bgCyan.white);
});
