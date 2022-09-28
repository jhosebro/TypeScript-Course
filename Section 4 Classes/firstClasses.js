var Cars = /** @class */ (function () {
    function Cars(brand, date, doors) {
        this.brand = brand;
        this.date = date;
        this.doors = doors;
    }
    Cars.prototype.accelerate = function () {
        console.log("".concat(this.brand, " is accelerating"));
    };
    Cars.prototype.brake = function () {
        console.log("".concat(this.brand, " is braking"));
    };
    return Cars;
}());
var car1 = new Cars('Ford', '2019', 4);
car1.accelerate();
car1.brake();
