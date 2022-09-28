interface Desk<F=number> {
    name: string;
    price: F;
}

let desk: Desk<number> ={name:'John',price: 100};
let num: Desk<string> = {name: 'Pine', price: '100k'}