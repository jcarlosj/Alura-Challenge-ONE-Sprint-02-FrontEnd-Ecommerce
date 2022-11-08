const route = ( event ) => {
    event = event || window.event;          // Capturamos el evento de un enlace    
    event.preventDefault();                 // Evitamos la precarga 

    console.log( event.target.href );

    window.history.pushState( {}, "", event.target.href );      // Usamos el API usar historial de navegacion, para actualizar la URL en el navegador
}

window.route = route;   // Damos acceso global a nuestra funcionalidad de enrutamiento