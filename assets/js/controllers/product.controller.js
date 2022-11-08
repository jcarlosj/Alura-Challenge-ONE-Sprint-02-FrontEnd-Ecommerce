import { productServices } from '../services/product.service.js';

export const showProducts = async () => {
    const products = await productServices.getProducts();

    console.log( products );
}