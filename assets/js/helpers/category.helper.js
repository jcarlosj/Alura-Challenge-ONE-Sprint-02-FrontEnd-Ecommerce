import { createElement, createNode } from './node.helpers.js';


export const CategorySectionComponent = ( name, products ) => {
    const
        mainNode = createNode({
            element: 'section',
            classes: [ 'section', 'category', `section-${ name }`, name ],
            attributes: [
                { 'data-section': `section-${ name }` }
            ]
        }),
        containerNode = createNode({
            element: 'div',
            classes: [ 'container' ]
        }),
        headerNode = createNode({
            element: 'header',
            classes: [ 'section__header', 'category__header' ]
        }),
        h2Node = createNode({
            element: 'h2',
            text: name
        }),
        aVerTodoNode = createNode({
            element: 'a',
            text: 'Ver todo',
            classes: [ 'btn', 'btn-view', 'btn-all' ],
            attributes: [
                { 'href': '/#' }
            ]
        }),
        ulNode = createNode({
            element: 'ul',
            classes: [ 'starwars__content-list', 'nav_section', 'nav' ]
        });


    products.forEach( ({ name, url, price }) => {
        
        const
            liNode = createNode({
                element: 'li',
                classes: [ 'nav-item' ]
            }),
            divItemNode = createNode({
                element: 'div',
                classes: [ 'product-item' ]
            }),
            divIconsNode = createNode({
                element: 'div',
                classes: [ 'product-item__icons', 'icons' ]
            }),
            spanIconDelete = createNode({
                element: 'span',
                classes: [ 'icon', 'icon-delete', 'product-item__icon-delete' ]
            }),
            spanIconEdit = createNode({
                element: 'span',
                classes: [ 'icon', 'icon-edit', 'product-item__icon-edit' ]
            }),
            imgNode = createNode({
                element: 'img',
                classes: [ 'product-item__image' ],
                attributes: [
                    { 'src': url },
                    { 'alt': name }
                ]
            }),
            h3Node = createNode({
                element: 'h3',
                text: name,
                classes: [ 'product-item__name', 'product__name' ]
            }),
            pNode = createNode({
                element: 'p',
                text: `$${ price.toFixed( 2 ) }`,
                classes: [ 'product-item__price', 'product__price' ]
            }),
            aVerProducto = createNode({
                element: 'a',
                text: 'Ver producto',
                classes: [ 'btn', 'btn-view' ],
                attributes: [
                    { 'href': '/#' }
                ]
            });

        divIconsNode.appendChild( spanIconDelete );
        divIconsNode.appendChild( spanIconEdit );
    
        divItemNode.appendChild( divIconsNode );
        divItemNode.appendChild( imgNode );
        divItemNode.appendChild( h3Node );
        divItemNode.appendChild( pNode );
        divItemNode.appendChild( aVerProducto );
    
        liNode.appendChild( divItemNode );
        ulNode.appendChild( liNode );
    });

    

    headerNode.appendChild( h2Node );
    headerNode.appendChild( aVerTodoNode );

    containerNode.appendChild( headerNode );
    containerNode.appendChild( ulNode );

    mainNode.appendChild( containerNode );
    
    return mainNode;
}