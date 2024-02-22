
import MathUtils from '../utils/MathUtils';

export class Price {
    static KG_TO_LB = 2.20462;

    constructor(value, type, unit) {
        if (unit === 'HNDGR') {
            this.value = 10 * value;
            this.unit = 'KG';
        } else if (unit === 'ONEGR') {
            this.value = 1000 * value;
            this.unit = 'KG';
        } else if (unit === 'ZEROGR') {
            this.value = 0.0;
            this.unit = 'ZEROGR';
        } else {
            this.value = value;
            this.unit = unit;
        }
        this.type = type || "";
    }

    getType() {
        return this.type;
    }

    getUnit() {
        return this.unit;
    }

    getValue() {
        return MathUtils.roundDouble(this.value, 2);
    }

    getValueAsString() {
        return this.value.toFixed(2);
    }

    getPricePer(unit) {
        // Implement the logic based on the provided Java method
        // This will require adjusting based on how you've implemented or plan to use the Unit enum in JavaScript
        // For simplicity, only a part of the logic is demonstrated here
        if (this.unit === 'EA' && unit === 'EA') return this.getValue();
        // Add other conditions here
        throw new Error(`Unable to convert ${this.unit} into ${unit}`);
    }

    // JavaScript does not have a built-in compareTo method, but you can implement a custom comparison logic
    compare(otherPrice) {
        const compareValue = otherPrice.getPricePer(this.unit);
        return this.getValue() - compareValue;
    }
}


