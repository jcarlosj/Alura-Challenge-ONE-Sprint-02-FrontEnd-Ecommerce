import ProductController from './controllers/product.controller.js';

import { formProduct } from './forms/form-product/form-product.js';


( async ( ) => {
    const $form = await document.querySelector( '[data-form="product"]' );

    async function init() {
        const
            urlParams = new URLSearchParams( window.location.search ),
            id = urlParams.get( 'id' );

        // Si existe ID entonces obtiene los datos del producto que se va a editar
        if( id )
            getDataProductBy( id );

        formProduct();

        $form.addEventListener( 'submit', async ( event ) => {
            event.preventDefault();

            let dataForm = {
                url:            $form.querySelector( '[data-type="input-url"]' ).value,
                category:       $form.querySelector( '[data-type="input-category"]' ).value,
                name:           $form.querySelector( '[data-type="input-name"]' ).value,
                price:          $form.querySelector( '[data-type="input-price"]' ).value,
                description:    $form.querySelector( '[data-type="textarea-description"]' ).value
            }

            // Si existe un ID se editaran los datos, si no se creara un nuevo producto a partir de ellos.
            if( id ) {
                dataForm[ 'id' ] = id;

                const modifiedProduct = await ProductController.edit( dataForm );
                console.log( modifiedProduct );
            }
            else {
                dataForm[ 'id' ] = new Date().valueOf();
                
                const registeredProduct = await ProductController.add( dataForm );
                console.log( registeredProduct );
            }

            console.log( dataForm );
            console.log( 'Click Submit!' );
        });
    }

    // Controla el modo editar datos de producto
    async function getDataProductBy( id ) {
        const product = await ProductController.findById( id );   // Obtiene datos del detalle del producto por ID
    
        console.log( $form );
    
        if( ! product ) 
            window.location.replace( '../../../products-admin.html' );
    
        $form.querySelector( '[data-type="input-url"]' ).value = product.url;
        $form.querySelector( '[data-type="input-category"]' ).value = product.category;
        $form.querySelector( '[data-type="input-name"]' ).value = product.name;
        $form.querySelector( '[data-type="input-price"]' ).value = product.price;
        $form.querySelector( '[data-type="textarea-description"]' ).value = product.description;
    
        
        console.log( product );
    }
    
    init();

})();



