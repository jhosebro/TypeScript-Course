var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father2 = /** @class */ (function () {
    function Father2(name) {
        this.name = name;
    }
    return Father2;
}());
var Son2 = /** @class */ (function (_super) {
    __extends(Son2, _super);
    function Son2(name, lastName) {
        var _this = _super.call(this, name) || this;
        _this.lastName = lastName;
        return _this;
    }
    Son2.prototype.showName = function () {
        return this.name;
    };
    return Son2;
}(Father2));
var son2 = new Son2('John', 'Doe');
console.log(son2.showName());
