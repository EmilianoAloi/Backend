import fs from 'fs';

export class CartManager {
    constructor(path) {
        this.path = path;
    }


    async getCarts() {
        try {
            if (fs.existsSync(this.path)) {
                const cartsJSON = await fs.promises.readFile(this.path, "utf-8");
                const carts = JSON.parse(cartsJSON);
                return carts;
            } else return [];
        } catch (error) {
            console.log(error);
        }
    }


    async addCart(products) {
        try {
            const carts = await this.getCarts();

            const newCart = {
                id: carts.length + 10,
                products: products
            }

            carts.push(newCart);

            await fs.promises.writeFile(this.path, JSON.stringify(carts));
            return newCart

        } catch (error) {
            console.log(error);

        }
    }



    async getCartsById(cid) {
        try {
            if (fs.existsSync(this.path)) {
                const cartsJSON = await fs.promises.readFile(this.path, "utf-8");
                const carts = JSON.parse(cartsJSON);
                const cartById = carts.find((cart) => cart.id === cid)
                if (cartById) return cartById
                else return "No se ha encontrado un Cart con ese ID"

            } else return "No hay ningun Cart"

        } catch (error) {
            console.log(error);

        }

    }

    async addProductInCart(idCart, idProd) {
        try {

            const carts = await this.cartManager.getCarts();
            const cartExist = await this.getCartsById(idCart);
            if (cartExist) {
                const existProdInCart = cartExist.products.find(p => p.id === idProd);
                if (existProdInCart) existProdInCart.quantity + 1
                else {
                    const product = {
                        product: idProd,
                        quantity: 1
                    };
                    cartExist.products.push(product);
                }
            }

            await fs.promises.writeFile(this.path, JSON.stringify(carts));

            res.status(200).json(carts);

            return cartExist
        } catch (error) {

        }
    }





}