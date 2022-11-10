import ProductController from './controllers/product.controller.js';
import { CategorySectionComponent } from './helpers/category.helper.js';

const sectionsNode = document.querySelector( '[data-sections]' );
// console.log( sectionsNode );

const init = async () => {
    const categories = [ 'starwars', 'hola', 'diversos', 'consolas' ];

    for( let category of categories ) {
        const products = await ProductController.byCategory( category );

        if( products.length > 0 ) {
            const componentCategory = CategorySectionComponent( category, products );
            console.log( componentCategory );

            sectionsNode.appendChild( componentCategory );
        }

    }
}

init();