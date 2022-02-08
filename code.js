// helloWorld function 
// function helloWorld() {
//      return "Hello, World!";
// }

function sayHello(input) {
    if(input === undefined || input === true || input === false){
        return "Hello, World!";
    }
    if (input === ""){
        return "empty string";
    }
    // if (input === undefined){
    //     return "Hello, World!"
    // }
    // if (input === true){
    //     return "Hello, World!"
    // }
    // if (input === false){
    //     return "Hello, World!"
    // }
    return "Hello, " + input + "!";
    // if (input === "Alex") {
    //     return "Hello, Alex";
    // } else if (input === "Pat"){
    //     return "Hello, Pat!";
    // }else {
    //     return "Hello, Jane!";
    // }
}

function isFive(input){
    if(input === 5){
        return true;
    }else if (input === "5") {
        return true;
    }
    else {
        return false;
    }
}