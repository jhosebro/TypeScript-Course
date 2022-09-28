function show0(data: string): string {
    return data;
}

console.log(show0('Hello World'));

function genericShow<T>(data: T): T{
    return data;
}

console.log(genericShow('Hello World'));
console.log(genericShow(123));
console.log(typeof(genericShow(true)));