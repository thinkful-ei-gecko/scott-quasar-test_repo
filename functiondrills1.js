'use strict'

function createGreeting(name, age) {
    let yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    return 2019 - age;
}

const greeting1 = createGreeting('Chris', 29);
console.log(greeting1);