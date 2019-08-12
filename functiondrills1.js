'use strict'

function createGreeting(name, age) {
    let yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return 2019 - age;
}

try {
    const greeting1 = createGreeting('Chris', 29);
} catch(e) {
    console.log(e);
}

console.log(greeting1);