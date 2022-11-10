import ProductController from './controllers/product.controller.js';


const init = async ( ) => {
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' );

    if( id ) {
        const product = await ProductController.findById( id );

        if( ! product ) 
            window.location.replace( '../../../home.html' );

        console.log( product );

    }
    else {
        window.location.replace( '../../home.html' );
    }
}

init();