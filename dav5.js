let person = {
    firstName: 'Sofi',
    lastName: 'Shalikashvili',
    age: 25
}
for (let value in person) {
    console.log(person[value]);
}