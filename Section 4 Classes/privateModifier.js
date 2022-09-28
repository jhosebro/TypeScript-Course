var Animal2 = /** @class */ (function () {
    function Animal2(name, size) {
        this.name = name;
        this.size = size;
    }
    Animal2.prototype.getName = function () {
        return this.name;
    };
    Animal2.prototype.getSize = function () {
        return this.size;
    };
    Animal2.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Animal2;
}());
var animal2 = new Animal2('Lion', 100);
animal2.move();
console.log(animal2.getName());
var Connect = /** @class */ (function () {
    function Connect() {
    }
    return Connect;
}());
var connect = new Connect();
connect.url;
