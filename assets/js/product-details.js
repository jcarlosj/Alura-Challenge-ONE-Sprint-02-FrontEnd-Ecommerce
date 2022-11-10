import ProductController from './controllers/product.controller.js';
import { ProductComponent } from './helpers/product-details.helper.js';


const sectionsNode = document.querySelector( '[data-sections]' );

const init = async ( ) => {
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' );

    if( id ) {
        const product = await ProductController.findById( id );

        if( ! product ) 
            window.location.replace( '../../../home.html' );

        const component = ProductComponent( product );
        console.log( component );

        sectionsNode.appendChild( component );

    }
    else {
        window.location.replace( '../../home.html' );
    }
}

init();