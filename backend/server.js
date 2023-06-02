import  express, { json } from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import  authRoutes from "./routes/AuthRoute.js"
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import  cors  from "cors"

 // we give the name auth over self.

// for getting .env file data 
dotenv.config()

// for database connection 

connectDB()

// createing a variable for express 
const app=express()
// using meddleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// routes 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);



app.get("/",(req,res)=>{res.send("<h1>HI </h1>")})

const port=process.env.PORT || 8080

app.listen(port,()=>{console.log("this is the PORT")})