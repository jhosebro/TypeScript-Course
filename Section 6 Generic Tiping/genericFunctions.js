function show0(data) {
    return data;
}
console.log(show0('Hello World'));
function genericShow(data) {
    return data;
}
console.log(genericShow('Hello World'));
console.log(genericShow(123));
console.log(typeof (genericShow(true)));
