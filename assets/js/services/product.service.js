const getAllProducts = async () => {
    const
        response = await fetch( 'http://localhost:3000/products' ),
        data = response.json();

    return data;
}

const getProductsByCategory = async ( category, id = null ) => {
    console.log( category );
    let products = await getAllProducts();

    if ( id !== null )
        return products
            .filter( product => product.category === category && product.id !== id )
            .slice( 0, 6 );
    
    return products
        .filter( product => product.category === category )
        .slice( 0, 6 );
}

const getProductsById = async ( id ) => {
    let products = await getAllProducts();

    return products.filter( product => product.id === Number( id ));
}

const addNewProduct = async ( data ) => {
    const { id, name, category, url, price, description } = data;

    const response = await fetch( 'http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({ id, name, category, url, price, description }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    return await response.json();
}

const deleteProductsById = async ( id ) => {
    await fetch( `http://localhost:3000/products/${ id }`, {
        method: 'DELETE',
    });
}


export const productServices = {
    getAllProducts,
    getProductsByCategory,
    getProductsById,
    deleteProductsById,
    addNewProduct
}