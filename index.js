
// const message = " I can do it";

// function sum(a, b){
//      const result = a + b;
//      return result;
// }

// function mul(a, b){
//      const result = a * b;
//      return result;
// }

// function calc(a, b){
//      return sum(a, b) + mul(a, b)
// }


// function getResult(a, b){
//      return calc(a, b);
// }

// getResult(5, 7);


// function closuresDeamo() {
//      var x = 30;

//      return function(){
//           var y = 20;
//           console.log("sum :"+ (x + y) );

//      }
// }
// closuresDeamo()();



// Array Sort() method 


// const fruts = ["Banana", "Apple", "Orange", "Mango"];

// console.log(fruts.sort());
// console.log(fruts.reverse());


// const ponts = [40, 100, 22, 5, 25, 10 ,2 ,60, 80];

// const sorted = function (a, b) {
//      return b - a;  
// }

// const sortAsanding =  ponts.sort(sorted)


// console.log(ponts);
// console.log(sortAsanding);


// const people = [
//                {name: "salman", age: 23, gpa: 3.0}, 
//                {name: "farcy", age: 67, gpa: 3.0}, 
//                {name: "tamim", age: 21, gpa: 2.0}, 
//                {name: "tasnim", age: 8, gpa: 5.0}
//                ]

// const smallBroo = people.sort((a , b) => {
//     return a.gpa - b.gpa;
// })

// console.log(smallBroo);



//! while loop
// let salman = "farcy"

// while(salman = "rohim hoy"){
//      console.log("rohim is salman broyher");

// }

// console.log(salman);




//* JavaScript Coloser

// function outer(){
//      console.log("outer");
//      function inner(){
//           console.log("inner");
//      }
// }
// outer(); //? "outer"


// function outer(){
//      console.log("outer");
//      function inner(){
//           console.log("inner");
//      }
//      inner();
// }
// outer() //? "outer"  "inner"



// function outer(){
//      console.log("outer");
//      return function inner(){
//           console.log("inner");
//      };
// }
// console.log(outer()); //?"outer", [function: inner]




// function outer(){
//      console.log("outer");
//      return function inner(){
//           console.log("inner");
//      };
// }

// const z = outer(); //?"Outer"
// z(); //? "inner"


// function outer(){
//      console.log("Outer");
//      return function inner(){
//           console.log("inner");
//      };
// }

// outer()(); //?"Outer", "inner"



// function o(){
//      function m(){
//           function i(){
//                function j(){
//                     console.log("Jre");

//                }
//                j();
//           }
//           i();
//      }
//      m();
// }
// o(); //? "Jre"


// function o(){
//      function m(){
//           function i(){
//                function j(){
//                     console.log("Jre");
//                     let car = "Bmw";
//                }
//                j();

//                console.log(car = "bick");
//           }
//           i();
//      }
//      m();
// }
// o(); //? "Jre"


// function outer(x){
//      function inner(y){
//           if(x > 1){
//                console.log(y);
//           }
//           else{
//                console.log(y * 2);

//           }
//      }
//      inner(6)
// }
// outer(0) //? 12


// function counter () {
//      let count = 0;

//      return {
//           incriment: function(){
//                          count++;
//                          console.log(count);
//                     },
//           decrement: function(){
//                          count--;
//                          console.log(count);

//                     }
//      }
// }

// const myCounter = counter();
// myCounter.incriment()
// myCounter.incriment()
// myCounter.incriment()
// myCounter.decrement() 



// function counter() {
//      let count = 0;

//      return {
//           incriment: function () {
//                count++;
//                console.log(count);
//           },
//           decrement: function () {
//                count--;
//                console.log(count);

//           }
//      }
// }

// const myCounter = counter();
// console.log(myCounter);




//* Coloser Practice

// function outer(){
//      var x = 10;
//      function inner(){
//           console.log(x);
//      }
//      x = 30;
//      return inner;
// }
// var innerFunc = outer();
// innerFunc() //? 30


// (function outer(a){
//      return (function inner(y){
//           console.log(a);
//      })(109)
// })(100)



// let count = 0;
// (function logCount(){
//      if(count === 0){
//           let count = 1;
//           console.log(count);
//      }
//      console.log(count);

// })();



// for(var i = 0; i < 5; i++){
//      setTimeout(function(){
//           console.log(i);

//      }, 1000);
// }


// for (var i = 0; i < 5; i++) {
//      (function(j) {
//           setTimeout(function () {
//                console.log(j);

//           }, 1000);
//      })(i);
// }


// for(let i = 0; i < 5; i++){
//      setTimeout(function(){
//           console.log(i);

//      }, 1000);
// }


//*JavaScript Hoisting

// console.log("name is", name);
// var name;
// name = "tom";
// console.log("name is ", name);


//* Hoisting in javaScript

// test();
// var test = function(){
//      console.log('I am being tested');
//  }


//  console.log(x); // আউটপুট: আনডিফাইন্ড (ভেরিয়েবল হয়েস্টিং)
// var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization(letহয়েস্টিং না)
// let y = 10;


//* Scope in JavaScript

//?Global Scope

// var golobalVariable = "this is a golobal variable";
// function doSomet() {
//      console.log(golobalVariable);
// }
// doSomet()


// function doSomthing(){
//      var count = 10;
//      console.log(count);
// }
// doSomthing()

// console.log(count);


//? variable shadwoing

// let greeting = "hello";
// function showGreetiing(){
//      let greeting = "salman";
//      console.log(greeting);

// }

// showGreetiing() 



// let count = 10;

// function outer(){
//      let count = 20;
//      function inner(){
//           let count = 30;
//           console.log(count);
//      }

//      inner();
//      console.log(count);
// }

// outer();
// console.log(count);


// function factorial(num) {
//      if (num === 0 || num === 1) {
//           return 1;
//      }

//      const refact = num * factorial(num - 1);

//      return refact;
//  }
//  console.log(factorial(10));


//* this in javaScript

// const person = {
//      name: "John",
//      greet: function(){
//           console.log(`Hello, my name is ${this.name}`);
          
//      }
// }

// person.greet()

// function greet() {

//   console.log(`Hello, my name is ${this.name}`);
// }

// const person = {
//   name: 'John'
// };

// greet(); // Output: Hello, my name is undefined
// const person = {
//   name: 'John',
//   greet: () => {
//     console.log(`Hello, my name is ${name}`);
//   }
// };

// person.greet(); // Output: Hello, my name is undefined


// function greet() {
//   console.log(this); // Window/global object
// }

// greet();


// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(this); // person object
//   }
// };

// person.greet();


// function Person(name) {
//   this.name = name;
//   console.log(this); // New Person object
// }

// const john = new Person('John');


 

function Car(model, year) {
     // 'this' নতুনভাবে তৈরি হওয়া অবজেক্টের দিকে নির্দেশ করে
     this.model = model;
     this.year = year;
 
     // মেথড যোগ করা
     this.getDetails = function() {
         return this.model + ' - ' + this.year;
     };
 }
 
 const car1 = new Car('Toyota', 2021);
 const car2 = new Car('Honda', 2020);
 
 console.log(car1); // Toyota - 2021
 console.log(car2.getDetails()); // Honda - 2020