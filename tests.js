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





