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
        .filter( product => product.category == category )
        .slice( 0, 6 );

}


export const productServices = {
    getAllProducts,
    getProductsByCategory
}