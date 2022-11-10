import { createNode } from './node.helpers.js';


export const ProductComponent = ({ id, name, url, price, description }) => {

    const className = 'product-details';

    const
        mainNode = createNode({
            element: 'section',
            classes: [ 'section', 'product-details' ],
        }),
        containerNode = createNode({
            element: 'div',
            classes: [ 'container-md' ]
        }),
        productDetailsNode = createNode({
            element: 'div',
            classes: [ 'product__details' ]
        }),
        imgNode = createNode({
            element: 'img',
            classes: [ 'product__image' ],
            attributes: [
                { 'src': url },
                { 'alt': name }
            ]
        }),
        productInfoNode = createNode({
            element: 'div',
            classes: [ 'product__info' ],
        }),
        h3Node = createNode({
            element: 'h3',
            text: name,
            classes: [ 'product__name' ]
        }),
        pProductPriceNode = createNode({
            element: 'p',
            text: `$${ price }`,
            classes: [ 'product__price' ]
        }),
        pProductDescriptionsNode = createNode({
            element: 'p',
            text: description,
            class: 'product__description'
        });

    productInfoNode.appendChild( h3Node );
    productInfoNode.appendChild( pProductPriceNode );
    productInfoNode.appendChild( pProductDescriptionsNode );

    productDetailsNode.appendChild( imgNode );
    productDetailsNode.appendChild( productInfoNode );

    containerNode.appendChild( productDetailsNode );

    mainNode.appendChild( containerNode );

    return mainNode;
}