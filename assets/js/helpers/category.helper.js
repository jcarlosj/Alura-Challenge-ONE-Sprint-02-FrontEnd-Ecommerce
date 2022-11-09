import { createElement } from './node.helpers.js';

const divNode = () => {
    return createElement({
        element: 'div',
        classes: [ 'product-item' ]
    });
}

const liNode = () => {
    return createElement({
        element: 'li',
        classes: [ 'nav-item' ]
    });
}

const ulNode = () => {
    return createElement({
        element: 'ul',
        classes: [ 'starwars__content-list', 'nav_section', 'nav' ]
    });
}

const aNode = ( name, src ) => {
    const node = createElement({
        element: 'a',
        classes: [ 'btn', 'btn-view', 'btn-all' ],
        attributes: [
            { 'href': src }
        ]
    });

    node.textContent = name;

    return node;
}

const headingNode = ( type = 1, text ) => {
    const node = createElement({
        element: `h${ type }`
    });

    node.textContent = text;

    return node;
}

const headerNode = () => {
    const options = {
        element: 'header',
        classes: [ 'section__header', 'category__header' ]
    };

    return createElement( options );
}

const containerNode = () => {
    const options = {
        element: 'div',
        classes: [ 'container' ]
    };

    return createElement( options );
}

const sectionNode = ( name ) => {
    const options = {
        element: 'section',
        id: `section-${ name }`,
        classes: [ 'section', 'category', `section-${ name }`, name ],
        attributes: [
            { 'data-section': `section-${ name }` }
        ]
    };
    
    return createElement( options );
}

export const CategorySectionComponent = ( name ) => {

    const
        section = sectionNode( name ),
        container = containerNode(),
        header = headerNode(),
        h2 = headingNode( 2, name ),
        a = aNode( 'Ver todo', '#' ),
        ul = ulNode(),
        li = liNode(),
        div = divNode();

    li.appendChild( div );
    ul.appendChild( li );
    header.appendChild( h2 );
    header.appendChild( a );
    container.appendChild( header );
    container.appendChild( ul );
    section.appendChild( container );

    
    return section;
}