import './routes/routes.js';
import { showProducts } from './controllers/product.controller.js';

const $anchorEls = document.querySelectorAll( 'a' );    // Obtenemos todos los enlaces

// Iteramos todos los enlaces
$anchorEls.forEach( anchorEl => {
    // Agregamos un evento a cada enlace existente
    anchorEl.addEventListener( 'click', event => {
        window.route( event );  // Ejecutara funcionalidad de enrutamiento en el scope global
        console.log( window.history.length );   // Cantidad de elementos en el historial de la sesión, incluida la página cargada actualmente
    });
});


console.log( window.location.pathname );
showProducts();

