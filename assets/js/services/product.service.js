const getProducts = async () => {
    const
        response = await fetch( 'http://localhost:3000/products' ),
        data = response.json();

    return data;
}


export const productServices = {
    getProducts
}