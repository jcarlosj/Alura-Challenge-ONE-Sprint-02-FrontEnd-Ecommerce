export default class Product {
    #id;
    #name;
    #category;
    #url;
    #price;
    #description;

    constructor({ id, name, category, url, price, description }) {
        this.#id = Number( id );
        this.#name = name;
        this.#category = category;
        this.#url = url;
        this.#price = Number( price );
        this.#description = description;

        console.log( 'Product Model!' );
    }

    get id() { 
        return this.#id;
    }

    get name() { 
        return this.#name; 
    }
    set name( newName ) {
        this.#name = newName;
    }

    get category() { 
        return this.#category; 
    }
    set category( newCategory ) {
        this.#category = newCategory;
    }

    get url() { 
        return this.#url; 
    }
    set url( newUrl ) {
        this.#url = newUrl;
    }

    get price() {
        return this.#price;
    }
    set price( newPrice ) {
        this.#price = newPrice;
    }

    get description() {
        return this.#description;
    }
    set description( newDescription ) {
        this.#description = newDescription;
    }

}