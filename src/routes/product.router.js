import { Router } from "express";
import { ProductManager } from "../managers/ProductManager.js";

const router = Router();
const productManager = new ProductManager("./products.json");


// Ruta para obtener todos los productos o productos filtrado por marca via query

router.get("/", async (req, res) => {
    const limit = req.query.limit;
    const products = await productManager.getProducts();
    console.log("Todos los productos:", products);

    if (limit) {
        const limitMarca = products.filter(p => p.title.toLowerCase() === limit.toLowerCase());
        console.log("Productos filtrados:", limitMarca);
        res.send(limitMarca);
    } else res.send(products);
});


// Ruta para obtener product por id usando params

router.get("/:pid", async (req, res) => {
    const idProduct = parseInt(req.params.pid);
    const products = await productManager.getProducts();
    const product = products.find(p => p.id === idProduct);

    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "Producto no encontrado" });
});


export default router;