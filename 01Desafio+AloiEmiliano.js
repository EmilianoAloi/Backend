// class ProductManager {
//     constructor() {
//         this.path = './productManager.json'
//     }

//     addProduct(title, description, price, thumbnail, code, stock) {
//         if (!title || !description || !price || !thumbnail || !code || !stock) {
//             return console.log("Falta informacion");
//         }
//         if (this.products.some((product) => product.code == code)) {
//             return console.log("El Codigo ya esta siendo utilizado, ya debe haber un producto con el mismo codigo");
//         }

//         const product = {
//             id: this.#getMaxId() + 1,
//             title,
//             description,
//             price,
//             thumbnail,
//             code,
//             stock
//         };
//         this.products.push(product);
//         return console.log("Producto agreado con exito!");
//     };

//     #getMaxId() {
//         let maxId = 0;
//         this.products.map((product) => {
//             if (product.id > maxId) maxId = product.id;
//         })
//         return maxId;
//     };

//     getProducts() {
//         return this.products;
//     };

//     getProductById(idProduct) {
//         return this.products.find((product) => product.id === idProduct)
//     };

// }


// const productManager = new ProductManager();
// productManager.addProduct("iPhone", "telefono", 1000, "img", 589, 100);
// productManager.addProduct("Samsung", "telefono", 588, "img", 41, 55);

// const products = productManager.getProducts();
// console.log(products)


class ProductManager {
    constructor() {
        this.path = './productManager.json'
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Falta informacion");
        }
        if (this.products.some((product) => product.code == code)) {
            return console.log("El Codigo ya esta siendo utilizado, ya debe haber un producto con el mismo codigo");
        }

        const product = {
            id: this.#getMaxId() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
        return console.log("Producto agreado con exito!");
    };

    #getMaxId() {
        let maxId = 0;
        this.products.map((product) => {
            if (product.id > maxId) maxId = product.id;
        })
        return maxId;
    };

    getProducts() {
        return this.products;
    };

    getProductById(idProduct) {
        return this.products.find((product) => product.id === idProduct)
    };

}


const productManager = new ProductManager();
productManager.addProduct("iPhone", "telefono", 1000, "img", 589, 100);
productManager.addProduct("Samsung", "telefono", 588, "img", 41, 55);

const products = productManager.getProducts();
console.log(products)