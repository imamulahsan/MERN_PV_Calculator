import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//configure env
dotenv.config();

//databse config
connectDB();

//Creating a REST object
const app = express()

//middelwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);


//REST API
app.get('/', (req, res) => {
  res.send("<h1>PV APP<h1/>")
})

//PORT
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(`Server Running  PORT:  ${PORT}`.bgCyan.white)
})