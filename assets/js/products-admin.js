import ProductController from './controllers/product.controller.js';
import { CategorySectionComponent } from './helpers/category.helper.js';


const init = async () => {
    const products = await ProductController.all();

    if( products.length > 0 ) {
        console.log( products );
    }
}

init();