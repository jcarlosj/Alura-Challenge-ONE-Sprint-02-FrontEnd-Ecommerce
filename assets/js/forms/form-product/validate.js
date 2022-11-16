import { showError } from './errors.js';
import { displayError, changeState, changeStateElement } from '../helpers/forms.helper.js';


// Define los tipos de campo que se van a validar y su funcion evaludadora
const fieldValidators = {
    'input-url': ( input ) => validateURL( input ),
    'input-name': ( input ) => validateMaximumCharacters( input, 50 ),
    'input-category': ( input ) => validateMaximumCharacters( input, 50 ),
    'input-price': ( input ) => validatePrice( input ),
    'textarea-description': ( input ) => validateMaximumCharacters( input, 300 ),
}

export function validateDataSet( input, fields ) {
    const $btnForm = document.querySelector( '[data-type="button-submit"]' );
    const typeInput = input.dataset.type;
    let enabledButton = [];

    console.log( typeInput );
    console.log( input.validity );

    // Verifica si el tipo de campo esta definido
    if( fieldValidators[ typeInput ] )
        fieldValidators[ typeInput ] ( input );     // Ejecuta la validacion sobre el campo definido
    else {
        changeState( input );
        showError( typeInput, input );
    }

    fields.forEach( field => {
        // console.log( field.validity.valid );
        enabledButton.push( field.validity.valid );
    });

    changeStateElement( $btnForm, enabledButton );

}

function validateURL( input ) {
    const inputNameValue = input.value;
    const urlPattern = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.webp  )(\?[^\s[",><]*)?/g;

    let message = '';

    if( inputNameValue == '' )
        message = `La URL es requerida para desplegar la imagen del producto`;
    else if( ! urlPattern.test( inputNameValue ) ) {
        message = `La URL no tiene el formato de un recurso de imagen`;
    }


    input.setCustomValidity( message );         // setCustomValidity: define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico
    changeState( input );
    displayError( input, message );
}

function validateMaximumCharacters( input, maximumCharacters = 25 ) {
    const inputNameValue = input.value;

    let message = '';

    if( inputNameValue == '' )
        message = `El campo es requerido`;
    else if( inputNameValue.length > maximumCharacters )
        message = `El campo debe contener máximo ${ maximumCharacters } caracteres`;

    
    input.setCustomValidity( message );         // setCustomValidity: define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico
    // input.reportValidity();                     // Despliega mensaje de error en el tooltip por defecto del campo
    // console.log( input.validationMessage );     // Muestra solo en mensaje de error actual

    changeState( input );
    displayError( input, message );
}

function validatePrice( input ) {
    const inputNameValue = input.value;

    let message = '';

    if( inputNameValue === '' )
        message = `El campo es requerido`;
    else if( inputNameValue < 0 )
        message = `El precio no puede ser un valor negativo`;

    input.setCustomValidity( message );         // setCustomValidity: define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico
    changeState( input );
    displayError( input, message );

}