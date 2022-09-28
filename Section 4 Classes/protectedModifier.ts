class Father2 {
    protected name: string;

    protected constructor(name: string) {
        this.name = name;
    }
}

class Son2 extends Father2 {

    public lastName: string;

    public constructor(name: string, lastName: string) {
        super(name);
        this.lastName = lastName;
    }

    showName(): string {
        return this.name;
    }
}

const son2 = new Son2('John', 'Doe');
console.log(son2.showName());