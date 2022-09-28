class Animal{
    public name: string
    public size: number

    public constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }


    public move(): void {
        console.log(`${this.name} is moving`);
    }
}

const animal1 = new Animal('Lion', 100);
animal1.move();