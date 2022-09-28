class Furniture<T>{
    name: string;
    price: T

    
    Show:(data:T) => T;
}

const obj = new Furniture()