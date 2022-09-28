var optionals = function (name, lastName, age) {
    if (age) {
        console.log("Hello my name is ".concat(name, " and my lastname is ").concat(lastName, " and my age is ").concat(age));
    }
    else {
        console.log("Hello my name is ".concat(name, " and my lastname is ").concat(lastName));
    }
};
optionals('Jhoan', 'Rojas');
optionals('Jhoan', 'Rojas', 22);
