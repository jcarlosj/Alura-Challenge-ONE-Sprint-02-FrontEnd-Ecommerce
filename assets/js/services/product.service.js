const getAllProducts = async () => {
    const
        response = await fetch( 'http://localhost:3000/products' ),
        data = response.json();

    return data;
}

const getProductsByCategory = async ( category ) => {
    console.log( category );
    let products = await getAllProducts();

    return products
        .filter( product => product.category === category )
        .slice( 0, 6 );

}

const getProductsById = async ( id ) => {
    let products = await getAllProducts();

    return products.filter( product => product.id === Number( id ));
}


export const productServices = {
    getAllProducts,
    getProductsByCategory,
    getProductsById
}