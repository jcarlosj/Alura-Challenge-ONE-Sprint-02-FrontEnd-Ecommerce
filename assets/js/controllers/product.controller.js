import { productServices } from '../services/product.service.js';

class ProductController {

    constructor() {
        console.log( 'ProductController!' );
    }

    allProducts = async () => {
        const products = await productServices.getAllProducts();
    
        return products;
    }
    
    byCategory = async ( category ) => {
        return await productServices.getProductsByCategory( category );
    
        console.log( products );
    }

}

export default new ProductController();