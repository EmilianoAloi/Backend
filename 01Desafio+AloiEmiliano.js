// console.log("hola")

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(idProduct) {
        return this.products.find((product) => product.id === idProduct)
    }

}