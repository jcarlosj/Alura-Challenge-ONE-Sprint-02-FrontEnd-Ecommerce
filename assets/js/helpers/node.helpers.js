const createAttribute = ({ nameAttr, valueAttr }) => {
    const newAttribute = document.createAttribute( nameAttr );

    if( valueAttr ) {
        newAttribute.value = valueAttr;
    } 

    return newAttribute;
}

const createElement = ({ element, id, classes, attributes } ) => {
    const node = document.createElement( element );

    if( id ) {
        const attribute = createAttribute({ 
            nameAttr: 'id', 
            valueAttr: id 
        });

        node.setAttributeNode( attribute );
    }

    if( classes?.length > 0 ) {
        classes.forEach( nameClass => {
            node.classList.add( nameClass );
        });
    }

    if( attributes?.length > 0 ) {

        for( let atribute of attributes ) {
            for ( let [ key, value ] of Object.entries( atribute ) ) {
                const attribute = createAttribute({ 
                    nameAttr: key, 
                    valueAttr: value 
                });

                node.setAttributeNode( attribute );
            }
        }

    }

    return node;
}


export {
    createElement
}