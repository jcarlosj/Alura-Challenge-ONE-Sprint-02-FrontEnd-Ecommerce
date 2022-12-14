import { productServices } from '../services/product.service.js';
import Products from '../models/Products.js';
import Product from '../models/Product.js';


class ProductController {
    #Products;

    constructor() {
        console.log( 'Product Controller!' );

        this.#Products = new Products();
    }

    addModel = ( products ) => {
        this.#Products.clearList();

        products.forEach( product => {
            this.#Products.add( product );
        });
    }

    findById = async ( id ) => {
        const product = await productServices.getProductsById( id );

        if( product.length === 0 )
            return false;

        return product[ 0 ];
    }

    byCategory = async ( category ) => {
        const products = await productServices.getProductsByCategory( category );

        if( products.length === 0 )
            return false;

        this.addModel( products );   

        return this.#Products.getList;
    }

    byCategoryExcludingProductById = async ( category, id ) => {
        const products = await productServices.getProductsByCategory( category, id );

        if( products.length === 0 )
            return false;

        this.addModel( products );   

        return this.#Products.getList;
    }

    all = async () => {
        const products = await productServices.getAllProducts();

        if( products.length === 0 )
            return false;

        this.addModel( products );  

        return this.#Products.getList;
    }

    add = async ( data ) => {
        const newProduct = new Product( data );

        return productServices.addNewProduct( newProduct );
    }

    edit = ( data ) => {
        const editedProduct = new Product( data );

        return productServices.editProduct( editedProduct );
    }

    delete = async ( id ) => {
        await productServices.deleteProductsById( id );
    }

}

export default new ProductController();