import express from "express";
import { ProductManager } from "./ProductManager/ProductManager.js";

const productManager = new ProductManager("./products.json");


const app = express();

app.use(express.json());

const PORT = 8080;


app.listen(PORT, async () => {
    console.log(`server on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.send("Hola cliente");
});


// Ruta para obtener todos los productos o productos filtrado por marca via query

app.get("/products", async (req, res) => {
    const limit = req.query.limit;
    const products = await productManager.getProducts();
    console.log("Todos los productos:", products);

    if (limit) {
        const limitMarca = products.filter(p => p.title.toLowerCase() === limit.toLowerCase());
        console.log("Productos filtrados:", limitMarca);
        res.send(limitMarca);
    } else res.send(products);
});



app.get("/products/:pid", async (req, res) => {
    const idProduct = parseInt(req.params.pid)
    const products = await productManager.getProducts();
    const product = products.find(p => p.id === idProduct);
    res.send(product);

    
});



