import fs from 'fs';

export class CartManager {
    constructor() {
        this.path = './src/data/carts.json';
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