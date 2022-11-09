import { productServices } from '../services/product.service.js';

class ProductController {

    constructor() {
        console.log( 'ProductController!' );
    }

    allProducts = async () => {
        const products = await productServices.getAllProducts();
    
        console.log( products );
    }
    
    byCategory = async ( category ) => {
        const products = await productServices.getProductsByCategory( category );
    
        console.log( products );
    }

}

export default new ProductController();