class Father {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showName(): void {
        console.log(`My name is ${this.name}`);
    }
}

class Child extends Father {

    lastName: string


    constructor(name: string, age: number, lastName: string) {
        super(name, age);
        this.lastName = lastName;
    }

    showNameChild(): void {
        console.log(`My name is ${this.name} ${this.lastName}`);
    }
}


const child1 = new Child('John', 20, 'Doe');
child1.showNameChild();