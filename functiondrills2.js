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

//console.log(jediName('Quasar', 'Wei'));