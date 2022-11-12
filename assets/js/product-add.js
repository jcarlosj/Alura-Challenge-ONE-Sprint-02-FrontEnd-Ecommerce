import ProductController from './controllers/product.controller.js';


( async ( ) => {
    const
        urlParams = new URLSearchParams( window.location.search ),
        id = urlParams.get( 'id' );

    if( id )    editProduct( id );
    else        addProduct();
})();


async function editProduct( id ) {
    const
        $form = await document.querySelector( '[data-form="product-form"]' ),
        product = await ProductController.findById( id );   // Obtiene datos del detalle del producto por ID

    console.log( $form );

    if( ! product ) 
        window.location.replace( '../../../home.html' );

    $form.querySelector( '[data-type="input-url"]' ).value = product.url;
    $form.querySelector( '[data-type="input-category"]' ).value = product.category;
    $form.querySelector( '[data-type="input-name"]' ).value = product.name;
    $form.querySelector( '[data-type="input-price"]' ).value = product.price;
    $form.querySelector( '[data-type="textarea-mensagem"]' ).value = product.description;

    console.log( `Modifica producto y redirecciona a 'products-admin'` );
    console.log( product );
}

function addProduct() {
    console.log( `Inserta nuevo producto y redirecciona a 'products-admin'` );
}