const checkParity = (number) => {
    if (Number.isNaN(number)) {
        console.log(`${number} is not a number`);
    } else {
        if (number % 2 === 0) {
            console.log(`${number} is even number`);
        } else {
            console.log(`${number} is odd number`);
        }
    }
}

checkParity(1969);
checkParity(1968);
checkParity(a);