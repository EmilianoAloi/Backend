import express from "express";
import { ProductManager } from "./ProductManager/ProductManager.js";

const app = express();

app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => console.log(`server on port ${PORT}`));