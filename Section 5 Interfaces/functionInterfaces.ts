interface General {
    (name: string, age: number): void;
}

let general: General;
general = (name: string, age: number) => {
    console.log(`My name is ${name} and I'm ${age} years old`);
}

general('John', 30);