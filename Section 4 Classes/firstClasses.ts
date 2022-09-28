class Cars {
    brand:string
    date:string
    doors:number


    constructor(brand:string, date:string, doors:number) {
        this.brand = brand;
        this.date = date;
        this.doors = doors;
    }

    accelerate(): void {
        console.log(`${this.brand} is accelerating`);
    }

    brake(): void {
        console.log(`${this.brand} is braking`);
    }


}

const car1 = new Cars('Ford', '2019', 4);

car1.accelerate();
car1.brake();