


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


(function outer(a){
     return (function inner(y){
          console.log(a);
     })(109)
})(100)