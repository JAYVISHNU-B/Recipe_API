import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipesRouter from "./Routers/recipesRouter.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


connectDB();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Api");
});

app.use("/api/receipes",recipesRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server started and running on the port");
});