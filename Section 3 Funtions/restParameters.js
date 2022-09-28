var dessertMenu = function (dessert) {
    var fruits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruits[_i - 1] = arguments[_i];
    }
    console.log("My favorite dessert is ".concat(dessert, " and this dessert has this ").concat(fruits));
};
dessertMenu('Ice Cream', 'Banana', 'Apple', 'Orange', 'Strawberry');
