let Authentication = true;
class Person {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        if (Authentication) {
            this.name = name;
        }
        else {
            console.log('You are not allowed to change the name');
        }
    }
}
const person = new Person('Jhoan');
person.setName = 'Jane';
console.log(person.getName);
