import { createElement } from './node.helpers.js';


export const CategorySectionComponent = ( name ) => {

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