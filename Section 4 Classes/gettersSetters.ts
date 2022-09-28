let Authentication: boolean = true;

class Person {
    public name: string

    constructor(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        if(Authentication) {
            this.name = name;
        }
        else
        {
            console.log('You are not allowed to change the name');
        }
    }
}


const person = new Person('Jhoan');
person.setName = 'Jane';
console.log(person.getName);