// // Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });



//unit test for sayHello


describe('sayHello', function (){
    it('should be a function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string")
    });
    it("should return the string 'Hello, Jane!'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should the string "Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should the string "Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return true ', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return string "empty string"', function () {
        expect(sayHello("")).toBe("empty string")
    });
})

// exercise 10



// unit case for isFive

describe('isFive', function (){
    it('should be a function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return false', function () {
        expect(isFive()).toBe(false)
    });
    it('should return true when input === 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true', function () {
        expect(isFive("5")).toBe(true)
    });
})


//11 exercise

//not working 1st try
// describe('isEven', function (){
//     it('should be a function', function () {
//         expect(typeof isEven).toBe('function')
//     });
//     it('should return "false" if there no is input', function () {
//         expect(isEven(undefined)).toBe(false)
//     });
//     it('should return true if number is 2', function () {
//         expect(isEven(2)).toBe(true)
//     });
//     it('should return true if number is -2', function () {
//         expect(isEven(-2)).toBe(true)
//     });
//     it('should return false when number is 3', function () {
//         expect(isEven(3)).toBe(false)
//     });
//     it('should return false when passed a string', function () {
//         expect(isEven(isNaN())).toBe(false)
//     });
//     it('should return false for string', function () {
//         expect(typeof isEven()).toBe(false)
//     });
// })

//exercise 11

//executes

describe('isEven', function (){
    it('should be a function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return "true" if there is input', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true if number is 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true if number is -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when number is 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed a string', function () {
        expect(isEven('banana')).toBe(false)
    });
    it('should return true for "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when called infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with a boolean', function () {
        expect(isEven(true), isEven(false)).toBe(false)
    });
    it('should return false when called with no argument', function () {
        expect(isEven()).toBe(false);
    });
});


//exercise 12


describe('isVowel', function () {
    it('should be a function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should return always a boolean', function () {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true when input is "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when input is "A"', function () {
        expect(isVowel("A")).toBe((true))
    });
    it('should return false when input is "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false when input is number', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when parameters are true or false', function () {
        expect(isVowel(isVowel(true), isVowel(false))).toBe(false)
    });
    it('should return false when parameter is string', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when there ir no input', function () {
        expect(isVowel(undefined)).toBe(false)
    });
})


// //exercise 13
describe('add', function (){
    it('should be a function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return 5', function () {
        expect(add(2, 3)).toBe(5)
    });
    it('should return -12 when adding negative number', function () {
      expect(add(-3,-9)).toBe(-12)
    });
    it('should return 11 when parameter left is within a string', function () {
        expect(add("5", 6)).toBe(11)
    });
    it('should return 6 when numbers are within a string', function () {
        expect(add("-4","10")).toBe(6)
    });
    it('should return "NaN" when given parameters as strings', function () {
        expect(  add("banana","split")).toBe(isNaN())
    });
    it('should return "NaN" when given parameters 2 as strings', function () {
        expect(  add(2,"apples")).toBe(isNaN())
    });
    it('should return "NaN" when given empty as strings', function () {
        expect(  add()).toBe(isNaN())
    });
});
