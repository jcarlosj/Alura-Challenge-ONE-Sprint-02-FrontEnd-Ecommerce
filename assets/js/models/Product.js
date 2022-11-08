export class Product {
    #id;
    #name;
    #url;
    #price;
    #description;

    constructor( name, url, price, description ) {
        this.#id = Date.now();
        this.#name = name;
        this.#url = url;
        this.#price = price;
        this.#description = description;
    }

    get name() { 
        return this.#name; 
    }
    set name( newName ) {
        this.#name = newName;
    }

    get url() { 
        return this.#url; 
    }
    set url( newUrl ) {
        this.#url = newUrl;
    }

    get price() {
        return this.price;
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