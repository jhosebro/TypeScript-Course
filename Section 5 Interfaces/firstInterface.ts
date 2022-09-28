interface Person {
    firstName: string;

}

function walk(person: Person):void {
    console.log(`${person.firstName} is walking`);
}

let newPerson = {firstName:'john'};
walk(newPerson);

