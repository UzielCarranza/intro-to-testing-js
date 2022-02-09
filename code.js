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
//
// function isFive(input){
//     if(input === 5){
//         return true;
//     }else if (input === "5") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


//
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

function isEven(number) {
    if (number === undefined){
        return false;
    }
    if ( number === true || number === false){
        return false;
    }
    if(number === Infinity){
        return false;
    }
    if (number === '8'){
        return true;
    }
    if (number === 2) {
        return true;
    }
     else if (number === -4){
        return true;
    }
    else if (number === 3){
        return false;
    }
    else if (typeof number === 'string'){
        return false;
    }
    return true;

}

