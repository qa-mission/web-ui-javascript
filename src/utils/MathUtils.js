export class MathUtils {
    static roundDouble(value, places) {
        if (places < 0) throw new Error("Places must be non-negative");

        // Multiply by the appropriate power of 10, round, and then divide back
        const factor = Math.pow(10, places);
        return Math.round(value * factor) / factor;
    }
}

