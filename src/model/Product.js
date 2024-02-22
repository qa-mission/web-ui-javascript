import { MathUtils } from "../utils/MathUtils";
export class Product {
    constructor(id, productIndex, salesText, salesEnds, productBrand, productName, productSize, productText, sellingPriceNow, sellingPriceWas, comparisonPrices) {
        this.id = id;
        this.productIndex = productIndex;
        this.salesText = salesText;
        this.salesEnds = salesEnds;
        this.productBrand = productBrand;
        this.productName = productName;
        this.productSize = productSize;
        this.productText = productText;
        this.sellingPriceNow = sellingPriceNow; // Assuming Price is an object or class
        this.sellingPriceWas = sellingPriceWas; // Assuming Price is an object or class
        this.comparisonPrices = comparisonPrices; // Assuming an array of Price objects
        this.onSale = salesText.toLowerCase().includes("sale");

        this.saveValue = 0;
        if (this.onSale && productText.includes("$")) {
            const saveValueStr = productText.split("$")[1];
            this.saveValue = MathUtils.roundDouble(parseFloat(saveValueStr), 2); // Assuming MathUtils.roundDouble is adapted to JS
        }
    }

    compare(otherProduct) {
        return this.sellingPriceNow.value - otherProduct.sellingPriceNow.value;
    }
}


