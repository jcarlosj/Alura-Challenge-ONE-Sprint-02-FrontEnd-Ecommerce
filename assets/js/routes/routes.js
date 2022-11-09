const route = ( event ) => {
    event = event || window.event;          // Capturamos el evento de un enlace    
    event.preventDefault();                 // Evitamos la precarga 

    console.log( event.target.href );

    window.history.pushState( {}, "", event.target.href );      // Usamos el API usar historial de navegacion, para actualizar la URL en el navegador
    router();
}

window.route = route;   // Damos acceso global a nuestra funcionalidad de enrutamiento


const routes = {
    "/": "./pages/home.html",
    "/login": "./pages/login.html",
    "/product": "./pages/product.html",
    "/products": "./pages/products.html",
    404: "./pages/404.html"
}

const router = async () => {
    const
        pathname = window.location.pathname,
        route = routes[ pathname ] || routes[ 404 ],
        htmlPage = await fetch( route ).then( data => data.text() );

    console.log( pathname );
    document.querySelector( '#main-page' ).innerHTML = htmlPage;
}

window.onpopstate = router;
window.route = route;

router();