import Product from './Product.js';


export default class Products {
    #products = [];

    constructor() {
        console.log( 'Products Model!' );
    }

    get getList() {
        return this.#products;
    }

    add({ id, name, category, url, price, description }) {
        this.#products = [ ...this.#products, new Product({ id, name, category, url, price, description }) ];
    }

    clearList() {
        this.#products = [];
    }
}