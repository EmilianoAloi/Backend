import { Router } from "express";
import { ProductManager } from "../managers/ProductManager.js";
import { productValidator } from "../middlewares/productValidator.js";

const routerProducts = Router();
const productManager = new ProductManager("./src/data/products.json");


// Ruta para obtener todos los productos o productos filtrado por marca via query

routerProducts.get("/", async (req, res) => {
    const limit = req.query.limit;
    const products = await productManager.getProducts();
    // console.log("Todos los productos:", products);

    if (limit) {
        const limitMarca = products.filter(p => p.title.toLowerCase() === limit.toLowerCase());
        console.log("Productos filtrados:", limitMarca);
        res.send(limitMarca);
    } else res.send(products);
});


// Ruta para obtener product por id usando params

routerProducts.get("/:pid", async (req, res) => {
    const idProduct = parseInt(req.params.pid);
    const product = await productManager.getProductById(Number(idProduct));
    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "Producto no encontrado" });
});


//Ruta para agregar producto

routerProducts.post("/", productValidator ,async (req, res) => {
    try {
        console.log(req.body)
        const { title, description, price, thumbnail, code, stock } = req.body;
        const newProduct = await productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json(error.message);
    };
});


// Ruta para modificar producto

routerProducts.put("/:pid", async (req, res) => {
    try {
        const data = req.body;
        const { pid } = req.params;
        const product = await productManager.updateProduct(Number(pid), data);
        return res.status(200).json(product);


    } catch (error) {
        res.status(500).json(error.message);

    }
})



// Ruta para eliminar producto

routerProducts.delete("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await productManager.deleteProduct(Number(pid));
        return res.status(200).json({ message: `Producto con ID ${pid} ha sido eliminado.`, product });

    } catch (error) {
        res.status(500).json(error.message);

    }


})


export default routerProducts;