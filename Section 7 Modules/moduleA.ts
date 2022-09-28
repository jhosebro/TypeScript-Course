class Watches {
    brand: string;
    color: string;
    price: number;

    constructor(brand: string, color: string, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    showWatches() {
        console.log(`Brand: ${this.brand}, Color: ${this.color}, Price: ${this.price}`);
    }
}

export default Watches;