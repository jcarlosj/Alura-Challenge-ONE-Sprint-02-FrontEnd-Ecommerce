import { productServices } from '../services/product.service.js';
import Products from '../models/Products.js';

class ProductController {
    #Products;

    constructor() {
        console.log( 'Product Controller!' );

        this.#Products = new Products();
    }

    byCategory = async ( category ) => {
        const products = await productServices.getProductsByCategory( category );

        if( products.length === 0 )
            return false;

        this.#Products.clearList();

        products.forEach( product => {
            this.#Products.add( product );
        });

        return this.#Products.getList;
    }

}

export default new ProductController();