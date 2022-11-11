import ProductController from './controllers/product.controller.js';
import { ProductSectionComponent } from './helpers/products.helper.js';


const sectionsNode = document.querySelector( '[data-sections]' );

( async () => {
    await display();
    actions();
})();

async function display() {
    const products = await ProductController.all();

    if( products.length > 0 ) {
        const componentProduct = ProductSectionComponent( 'Todos los productos', products );
        // console.log( componentProduct );

        sectionsNode.appendChild( componentProduct );
    }
}

function actions() {
    const $aAddProduct = document.querySelector( '[data-add-product]' );
    const $ulElement = sectionsNode.querySelector( '[data-product-list]' );
    const $aElements = $ulElement.querySelectorAll( 'a' );
    
    const actions = {
        'edit': ( data ) => edit( data ),
        'delete': ( data ) => remove( data )
    }

    $aAddProduct.addEventListener( 'click', event => {
        event.preventDefault();

        console.log( `Agrega nuevo producto` );
    });

    $aElements.forEach( $aEl => {
        $aEl.addEventListener( 'click', event => {
            event.preventDefault();

            const
                id = event.target.dataset.id,
                action = event.target.dataset.action;
            
            actions[ action ]({ $aEl, id });
        });
    });

    function edit({ $aEl, id }) {
        console.log( `Edita ${ id }` );
    }

    function remove({ $aEl, id }) {
        console.log( `Elimina ${ id }` );
        const 
            $liEl = $aEl.parentNode.parentNode.parentNode,
            $parentEl = $liEl.parentNode;
        
        $parentEl.removeChild( $liEl );
        ProductController.delete( id );
    }
}