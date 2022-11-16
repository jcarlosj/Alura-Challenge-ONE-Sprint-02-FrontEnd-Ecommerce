import { displayError } from '../helpers/forms.helper.js';


const typeErrors = [ 'valueMissing', 'typeMismatch', 'patternMismatch', 'customError' ];

const errorMessages = {}


function getErrorMessage( typeInput, input ) {
    let message = '';

    console.group( `type: ${ typeInput }` );

    /** Itera todos los tipos de errores que hemos considerado */
    typeErrors.forEach( typeError => {
        // console.log( `${ typeError }: ${ input.validity[ typeError ] }` );                                              // Mostrará todos los tipos de errores y sus errores

        // Verifica si existe este tipo de error en el elemento input
        if( input.validity[ typeError ] ) {
            console.log( `${ input.validity[ typeError ] ? `${ typeError } : ${ input.validity[ typeError ] }` : '' }` );    // Mostrará solo los tipos de errores que contiene el elemento
            
            message = errorMessages[ typeInput ][ typeError ];      // Asigna el mensaje de error
        }

    });

    console.groupEnd();

    return message;
}

export function showError( typeInput, input ) {
    const message = getErrorMessage( typeInput, input );

    console.log( getErrorMessage( typeInput, input ) );
    displayError( input, message );
}