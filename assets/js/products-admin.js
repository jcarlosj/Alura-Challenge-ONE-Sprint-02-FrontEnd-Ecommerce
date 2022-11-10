import ProductController from './controllers/product.controller.js';
import { ProductSectionComponent } from './helpers/products.helper.js';


const sectionsNode = document.querySelector( '[data-sections]' );

const init = async () => {
    const products = await ProductController.all();

    if( products.length > 0 ) {
        const componentProduct = ProductSectionComponent( 'Todos los productos', products );
        console.log( componentProduct );

        sectionsNode.appendChild( componentProduct );
    }
}

init();