import express from "express";
import productRouter from "./routes/product.router.js"
import cartRouter from "./routes/cart.router.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);
app.use("/carts", cartRouter);



app.listen(PORT, async () => {
    console.log(`Server on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hola cliente");
});

app.get("/test", (req, res) => {
    console.log("Endpoint de prueba");
    res.send("Prueba exitosa");
});


