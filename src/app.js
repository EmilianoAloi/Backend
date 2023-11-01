import express from "express";
import productRouter from "./routes/product.router.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);


app.listen(PORT, async () => {
    console.log(`Server on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hola cliente");
});




