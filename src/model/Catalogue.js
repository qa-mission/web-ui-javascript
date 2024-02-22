import { Product } from "./Product";
class Catalogue {
    
    constructor(products) {
        if (!Array.isArray(products) || !products.every(product => product instanceof Product)) {
            throw new TypeError('Constructor expects an array of Product instances');
        }
        this.products = products;
        this.container = this.fillContainer(this.products);
    }

    fillContainer(products) {
        const hashMap = {};
        products.forEach(product => {
            hashMap[product.getId()] = product;
        });
        return hashMap;
    }

    sortProductsDesc() {
        this.products.sort((a, b) => b.getId().localeCompare(a.getId()));
        return this.products;
    }

    getProductById(id) {
        if (id in this.container) {
            return this.container[id];
        }
        throw new Error(`Catalogue does not have product with ${id}`);
    }
}
