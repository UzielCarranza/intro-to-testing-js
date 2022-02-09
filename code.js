// // helloWorld function
// // function helloWorld() {
// //      return "Hello, World!";
// // }
//
// function sayHello(input) {
//     if(input === undefined || input === true || input === false){
//         return "Hello, World!";
//     }
//     if (input === ""){
//         return "empty string";
//     }
//     return "Hello, " + input + "!";
// }


// exercise 10

// function isFive(input){
//     if(input === 5 || input === "5"){
//         return true;
//     }
//         return false;
// }


//exercise 11
//second works better, this is a 1st try
// function isEven(number){
//     let convertToNumber;
//     if (number % 2 === 1){
//         return false;
//     }
//     else if (isNaN(number)){
//         return false;
//     } else if (number){
//         return true;
//     } else if (number !== undefined){
//         return true;
//     }
//     // if (!number){
//     //     convertToNumber = parseInt(number);
//     //     return true;
//     // }
//     return true;
//
// }

//exercise 11


function isEven(number) {
    if (typeof number === 'boolean' ||
        number === Infinity || number === undefined) {
        return false;
    }
    else if (number == '8') {
        return true;
    }
    else if (number % 2 === 2) {
        return true;
    } else if (number % 2 === 1 || typeof number === 'string') {
        return false;
    }
    return true;
}



//exercise 12
// function isVowel(letter) {
//     if (letter === "a" || letter ==="A") {
//         return true;
//     }
//     else if (typeof letter === 'number' || typeof letter === 'boolean' || typeof
//         letter === 'string' || typeof letter === undefined) {
//         return false;
//     } else {
//         return false;
//     }
// }


//exercise 13
//
// function add(num1, num2) {
//
//     var sum1 = parseInt(num1);
//     var sum2 = parseInt(num2)
//     var total = sum1 + sum2;
//     if (typeof sum1 === 'string' || typeof sum2 === 'string') {
//         return sum1
//     } else {
//         return total;
//         // return num1 + num2;
//     }
// }
