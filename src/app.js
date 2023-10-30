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
    res.send("Hola cliente")
});


app.get("/products", async (req, res) => {
    const products = await productManager.getProducts()
   
    res.send(products);

});




// app.get("/products", async (req, res) => {

//     try {


//     }




// });




app.get("/products/:pid", (req, res) => {
    req.params
});



