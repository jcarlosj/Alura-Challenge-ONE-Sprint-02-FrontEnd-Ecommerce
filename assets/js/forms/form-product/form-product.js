import { validateDataSet } from './validate.js';


export const formProduct = () => {
    const 
        $formProduct = document.querySelector( '[data-form="product"]' ),
        $fields = $formProduct.querySelectorAll( '.form-control' );

    const validate = ( event, enabledButton ) => validateDataSet( event.target, enabledButton );

    // console.log( $fields );
    $fields.forEach( field => {
        console.log( field.validity );

        field.addEventListener( 'blur', ( event ) => {
            validate( event, $fields );
        } );
        field.addEventListener( 'keyup', ( event ) => {
            validate( event, $fields );
        } );
    });
}