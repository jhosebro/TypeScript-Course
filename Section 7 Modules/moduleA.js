"use strict";
exports.__esModule = true;
var Watches = /** @class */ (function () {
    function Watches(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    Watches.prototype.showWatches = function () {
        console.log("Brand: ".concat(this.brand, ", Color: ").concat(this.color, ", Price: ").concat(this.price));
    };
    return Watches;
}());
exports["default"] = Watches;
