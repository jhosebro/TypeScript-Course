var show3 = function (name, lastName, age) {
    if (age === void 0) { age = 21; }
    if (age) {
        console.log("Hello my name is ".concat(name, " and my lastname is ").concat(lastName, " and my age is ").concat(age));
    }
    else {
        console.log("Hello my name is ".concat(name, " and my lastname is ").concat(lastName));
    }
};
show3('Jhoan', 'Rojas');
