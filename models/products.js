const products = [];

module.exports = class Product {
    constructor(title) {
        this.bookTitle = title;
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products;
    }
}