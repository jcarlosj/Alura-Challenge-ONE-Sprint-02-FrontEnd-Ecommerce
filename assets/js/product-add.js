import ProductController from './controllers/product.controller.js';

import { formProduct } from './forms/form-product/form-product.js';


( async ( ) => {
    const
        urlParams = new URLSearchParams( window.location.search ),
        id = urlParams.get( 'id' );

    if( id )    editProductMode( id );
    else        addProductMode();

    formProduct();
})();


async function editProductMode( id ) {
    const
        product = await ProductController.findById( id ),   // Obtiene datos del detalle del producto por ID
        $form = await document.querySelector( '[data-form="product"]' );
        

    console.log( $form );

    if( ! product ) 
        window.location.replace( '../../../products-admin.html' );

    $form.querySelector( '[data-type="input-url"]' ).value = product.url;
    $form.querySelector( '[data-type="input-category"]' ).value = product.category;
    $form.querySelector( '[data-type="input-name"]' ).value = product.name;
    $form.querySelector( '[data-type="input-price"]' ).value = product.price;
    $form.querySelector( '[data-type="textarea-description"]' ).value = product.description;

    console.log( `Modifica producto y redirecciona a 'products-admin'` );
    console.log( product );
}

function addProductMode() {
    console.log( `Inserta nuevo producto y redirecciona a 'products-admin'` );
}


