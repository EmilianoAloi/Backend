import { Router } from "express";
import { CartManager } from "../managers/CartManager.js";


const cartRouter = Router();
const cartManager = new CartManager("./src/data/carts.json");


// Ruta para obtener carts

cartRouter.get("/", async (req, res) => {
    const carts = await cartManager.getCarts();
    res.send(carts)
});



// Ruta para crear cart

cartRouter.post("/", async (req, res) => {
    try {

        const newCart = await cartManager.addCart(req.body);


        res.status(200).json(newCart);
    } catch (error) {
        res.status(500).json(error.message);
    };
});



// Ruta para obtener productos de un cart por Id 

cartRouter.get("/:cid", async (req, res) => {
    try {
        const id = Number(req.params.cid)
        const cart = await cartManager.getCartsById(Number(id));
        res.send(cart)
    } catch (error) {
        res.status(500).json(error.message);
    }

})


// Ruta para agregar un producto al arreglo products un cart por IdCart

cartRouter.post("/:cid/product/:pid", async (req, res) => {

    try {
        // const { cid, pid } = req.params

        const newProduct = await cartManager.addProductInCart()
        console.log(newProduct)

        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json(error.message);

    }




})


export default cartRouter;