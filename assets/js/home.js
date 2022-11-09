import ProductController from './controllers/product.controller.js';
import { CategorySectionComponent } from './helpers/category.helper.js';

const init = async () => {
    const categories = [ 'starwars', 'hola', 'diversos' ];

    for( let category of categories ) {
        const products = await ProductController.byCategory( category );

        console.log( products );

        if( products.length > 0 ) {
            const componentCategory = CategorySectionComponent( category );
            console.log( componentCategory );
        }

    }
}

init();