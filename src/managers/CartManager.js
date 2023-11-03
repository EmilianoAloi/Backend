import fs from 'fs';

export class CartManager {
    constructor() {
        this.path = './src/data/carts.json';
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
                id: carts.length + 1,
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






}