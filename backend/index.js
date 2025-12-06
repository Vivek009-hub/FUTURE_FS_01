import express from "express";
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 3000;


app.use(express.json());
app.use(cookieParser());
app.post("/", (req, res) => {
  
});

app.listen(port, () => {
    connectDB();
  console.log(`Example app listening on port ${port}`);
});
