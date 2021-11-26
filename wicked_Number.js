const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;
readline.question('', name => {
    number = name;
    if (number.length >= 3) {
        if (condOne(number) || condTwo(number) || condThree(number) || condFour(number) || condFive(number)) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    } else {
        console.log("No");
    }

    readline.close();
});

function condOne(str) {
    if (str[0] == "0") {
        return false;
    }
    for (let i = 1; i < str.length; i++)
        if (str[i] != '0') return false;
    return true;
}
function condTwo(str) {
    for (let i = 1; i < str.length; i++)
        if (str[i] != str[0]) return false;
    return true;
}
function condThree(str) {
    for (let i = 1; i < str.length; i++) {
        if (Math.abs(str[i] - str[i - 1]) != 1 && Math.abs(str[i] - str[i - 1]) != 9) return false;
    }

    return true;
}
function condFour(str) {
    const restring = reverseString(str);
    return str == restring;
}

function condFive(str) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < str.length; i++) {
        arr[str[i] - '0']++;
        if (arr[str[i] - '0'] > 2)
            return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (arr[str[i] - '0'] != 2 && arr[str[i] - '0'] != 0) {
            return false;
        }
    }
    return true;

}

function reverseString(str) {
    return str.split("").reverse().join("");
}


/* Only zeros follow the first digit.
All digits are the same.
The digits are consecutive (the sequence doesn't have to be increasing or decreasing, though). Note that we will consider 0 and 9 to be consecutive.
The number is a palindrome.
Every unique digit in the number occurs exactly twice. */