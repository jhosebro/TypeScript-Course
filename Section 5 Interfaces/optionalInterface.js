function showPerson(person) {
    let averageWeight = person.weight / person.alt;
    if (person.name) {
        console.log(`${person.name} has an average weight of ${averageWeight}`);
    }
    else {
        console.log(`This person has an average weight of ${averageWeight}`);
    }
}
let newPerson2 = { alt: 1.80, weight: 80 };
showPerson(newPerson2);
let newPerson3 = { alt: 1.80, weight: 80, name: 'John' };
showPerson(newPerson3);
