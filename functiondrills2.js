function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

function beyond(num) {
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0 ) {
        console.log('TO negative infinity');
    } else {
        console.log('Staying home');
    }
}

function decode(str) {
    switch (str[0]) {
        case 'a':
            return str[1];
        case 'b':
            return str[2];
        case 'c':
            return str[3];
        case 'd':
            return str[4];
        default: 
            return ' ';
    }
}
let string = 'craft block argon meter bells brown croon droop'.split(" ");
let decoded = '';

string.forEach(x=> decoded += decode(x));

console.log(decoded);

function daysInMonth (month, leapYear) {
    switch (month) {
        case 'January': 
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} has 31 days.`

        case 'February':
            return leapYear ? `${month} has 29 days` : `${month} has 28 days`;

        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} has 30 days.`
        default:
            throw new Error('must provide a valid month');
    }
}

console.log(daysInMonth('Februaasdfasdfry', true));