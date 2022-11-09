import ProductController from './controllers/product.controller.js';
import { createElement } from './helpers/node.helpers.js';

const init = async () => {
    const categories = [ 'starwars', 'hola', 'diversos' ];

    for( let category of categories ) {
        const products = await ProductController.byCategory( category );

        console.log( products );

        if( products.length > 0 ) {
            const options = {
                element: 'section',
                id: `section-${ category }`,
                classes: [ 'section', 'category', `section-${ category }`, category ],
                attributes: [
                    { "data-section": "section" }
                ]
            };
            
            const newEl = createElement( options );
            console.log( newEl );
        }

    }
}

init();