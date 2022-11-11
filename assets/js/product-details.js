import ProductController from './controllers/product.controller.js';
import { ProductComponent } from './helpers/product-details.helper.js';


const sectionsNode = document.querySelector( '[data-sections]' );

const init = async ( ) => {
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' );

    if( id ) {
        // Obtiene datos del detalle del producto por ID
        const product = await ProductController.findById( id );

        if( ! product ) 
            window.location.replace( '../../../home.html' );

        const component = ProductComponent( product );
        console.log( component );

        sectionsNode.appendChild( component );

        // Obtiene lista de productos de la misma categoría del detalle del producto sin incluirlo
        console.log( '>', product.category, product.id );
        const products = await ProductController.byCategoryExcludingProductById( product.category, product.id );    
        
        console.log( products );

    }
    else {
        window.location.replace( '../../home.html' );
    }
}

init();