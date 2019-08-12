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

// console.log(daysInMonth('Februaasdfasdfry', true));

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;

    // 1 rock
    // 2 paper
    // 3 scissors

    if (num > 3 || num < 1) {
        throw new Error ('enter a valid number between 1 and 3');
    }

    if (randomNo === num ) {
        return 'tie';
    } else if (num === 1 && randomNo === 3) {
        return 'player 1 wins';
    } else if (num === 3 && randomNo === 2) {
        return 'player 1 wins';
    } else if (num === 2 && randomNo === 1) {
        return 'player 1 wins';
    } else {
        return 'computer wins';
    }

}
for (let i = 0; i < 10; i++ )
{
    console.log(rockPaperScissors(Math.floor(Math.random() * 4) + 1));
}
