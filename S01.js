//😈😈😈 😈😈😈 😈😈😈 L-294 (Higher order function)😈😈😈 😈😈😈 😈😈😈 😈😈😈

// higher order function -> there are functions which take 
//another function as arguments
//these are called higher order functions

/*
function f(x,fn){
    // x -> number
    // fn -> function 

    console.log(x);
    console.log(fn);
    fn()
}

f(10,function(){
    console.log("I am an expression passed to a HOF");
})
*/

//😈😈😈 😈😈😈 😈😈😈 L-295  (Higher order function) 😈😈😈 😈😈😈 😈😈😈

/*

 arrays are also custom objects in js
 index of the element is the key and the element it self is the value
 ["Abhinav","Shivam","Golu"] -> {0:"Abhinav",1:"Shiavm",2:"Golu"}

*/

/*
    ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️Map function⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
  😍 map is a higher order function available with arrays
  😍 it takes a function as an argument -> f
  😍 it returns an array in which every value is actually
   by calling function  f with original array element as argument

   😜😜😜😜 When to use map?😜😜😜😜

   => In any situation when we have to do an operation
      on every element of the array and store the 
      result of each operation 

   => map can be a good option

   ❤️ For Example
    
   => Array of product objects

*/



/*
    🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Higher order function🔥🔥🔥🔥🔥🔥🔥🔥🔥

    These are functions that depends & operate on other function.
    higher order functions take another function as argument 
    or return a function and then execute the logic.
*/

/*
const numbers=[12,13,14,15,17,18,29,50,60];

function isPrime(n){
    if(n<=1){
        return false
    }

    for(let i=2;i<Math.floor(Math.sqrt(n))+1;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

const num=numbers.map(x=>x**2);

console.log(num);

const primeNum=numbers.filter(isPrime);

console.log(primeNum);

*/

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->296⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

// const arr=[3,1,2,5,12,11];

// arr.sort();

/* 
❤️it sorts the given array

❤️[expectation] -> this might arrange elements in inc order

❤️ default implementation of arr.sort() is going to sort 
my array in lexicographical order


⚡️0 -> A
⚡️1 -> B
⚡️2 -> C
⚡️3 -> D
⚡️4 -> E
⚡️5 -> F
⚡️6 -> G
⚡️7 -> H
⚡️8 -> I
⚡️9 -> J
⚡️.....

⚡️[D,B,C,F,BC,BB] // if we arrange it according to dictionary
 [B,BB,BC,C,D,F] -> [1,11,12,2,3,5]


*/

// console.log(arr);


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

// const num1=[1,10,9,100,1000,11,12,13,14,2,3];

// ❤️ sort num1 in increasing order

// num1.sort(function cmp(a,b){
    /*
    🔥if a<b => a-b will be negative => if cmp function gives negative
    then a is placed before b (a<b)

    🔥if a>b => a-b will be positive => if cmp function gives positive
    then b is placed before a (a>b)
    */
    // return a-b;
// });

/* sort is a HOF .. The sort function takes a comparator function
as argument */

// console.log(num1);












//  ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->298⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

// const arr1=[9,8,7,6,5];

/*
    ❤️ if the function that we are passing in map
     takes two arguments then first argument will
     be accessing  the actual value 

    ❤️ second argument will be accessing index of that value
*/

// function print(el,indx){
//     return `Element at index ${indx} is ${el}`;
// }

// const result1=arr1.map(print)

/*
  ❤️ here map is looping over every element
    and then passing element,index in the function print
*/

// console.log(result1);


// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->299(own custom map function)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
const arr2=[12,13,14,15,16];


function print1(el,indx){
    return `Element at index ${indx} is ${el}`;
}

function customMapper(arr,func){
    let result2=[]
    for(let i=0; i<arr2.length;i++){
        result2.push(func(arr[i],i))
    }
    return result2
}

const value1=customMapper(arr2,print1)

console.log(value1);
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->301⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
    🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥filter function🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

👉 filter is also a higher order function

👉 filter also loops over the array element

👉 there is one special thing about filter,i.e. the argument 
   function f which we have to pass inside filter should
   always return a boolean , otherwise output will be 
   converted to a boolean.

❤️ filter loops over every element,passes that element in the
   argument function and then if the output of this function
   call is true,then it stores the original element in a new
   array otherwise doesn't add this element to the array
*/

// function isEven(x){
//     return x%2==0 ; //returning a boolean
// }

// let arr3=[1,2,3,4,5,6,7,8,9];

// let evenarr3=arr3.filter(isEven);

// console.log(evenarr3);


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->302⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️


/*
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥reduce function🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

👉 reduce is a higher order function available for arrays

👉 reduce also takes function f as an argument

👉 what reduce does is,it one by one goes to every element
  of the array,say the current element is arr[i]
👉 reduce will pass this element to the function f, and 
   accumulate the result of further function calls
   with this particular result.

*/

// const arr4=[1,2,3,4,5,6]

// function add(prevResult,currValue){
//     return prevResult+currValue;
// }

// const result=arr4.reduce(add);

// console.log(result);

/* 
 🔥 CurrValue
 👉 first element => 2
 👉 second element => 3
 👉 third element => 4
 👉 fourth element => 5
 👉 fifth element => 6
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->303(Using reduce)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

//🔥 Cart features (Addition of prices)

/*
function addPrices(prevResult,currValue){
    // console.log(prevResult,currValue);
    let newPrice=prevResult.price+currValue.price
    return {price:newPrice}
}

let cart=[
    {
        price:100000,
        name:"iphone"
    },
    {
        price:500,
        name:"backcover"
    },
    {
        price:300,
        name:"tempered glass"
    }
];

const totalPrice=cart.reduce(addPrices);

console.log(totalPrice.price);

*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->304(callbacks)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/**
 👉 fun => HOF ? => it takes fn (which is a function) as argument

 👉 x => number

 👉 fn => function
 */

 /*
function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(6,function exec(){ //callback
    console.log("I am executed also.");
});

*/


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->306⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/**
 👉 1.Inversion of control
 👉 2.callback hell => readiability problem
 */

// const arr5=[1,15,17,90,67,34];

// arr5.sort(function cmp(a,b){
//     return a-b;
// });

// console.log(arr5);


/*

function doTask(fn,x){

    // whole implementation is done by team A

    fn(x*x); // calling my callback with square of x
    fn(x*x);
} //team A


// here team b tries to use it 

doTask(function exec(num){ 
    // due to callbacks,i am passing control of how exec
    // should be called to doTask

    // 🔥 this is inversion of control 
    console.log(num);
},9);


*/


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->308(JS is sync in nature)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

// 🔥🔥🔥🔥     Async programming with JS         🔥🔥🔥🔥

// 👉 JS is sync in nature. => if we execute valid ecmascript code
// which is given by the standards.

// 👉 JS is single threaded.


// console.log("hi! Abhinav");

// setTimeout(function(){
//     console.log("time done!");
// },5000);
// console.log("by");


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->310⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
/*
function timeConsumingByLoop(){
    console.log("Loop starts");
    for(let i=0;i<10000;i++){
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature(){
    console.log("Starting timer");
    setTimeout(function exec(){
        console.log("Completed the timer");
    },5000);
}

console.log("Hi!");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log("By!");

*/

/*
👉Event loop => it keeps checking
whether the callstack is empty or not & 
no global code is left.

👉Event queue
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->312⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
function timeConsumingByLoop(){
    console.log("Loop starts");
    for(let i=0;i<10000;i++){
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer0");
    setTimeout(function exec(){
        console.log("Completed the timer0");
        for(let i=0;i<1000000000;i++){
            // some task
        };
    },5000); // 5 sec timer
}

function timeConsumingByRuntimeFeature1(){
    console.log("Starting timer1");
    setTimeout(function exec(){
        console.log("Completed the timer1");
    },0); // 0 sec timer 
}

function timeConsumingByRuntimeFeature2(){
    console.log("Starting timer2");
    setTimeout(function exec(){
        console.log("Completed the timer2");
    },200); // 200 ms timer
}

console.log("Hi!");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By!");
*/
 
//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->313(interview problem =>1)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

// console.log("Hello World!");
// setTimeout(function exec(){
//     console.log("Timer done!");
// },0);
// console.log("End");

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->314(interview problem =>2)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️


// console.log("Hello World!");
// setTimeout(function exec(){
//     console.log("Timer done!");
// },0);

// for(let i=0;i<10000000000000;i++){
//     // Some Task => 10 sec take time
// }
// console.log("End");

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->315(interview problem =>3)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
console.log("Hello World!");

for(let i=0;i<3;i++){
    setTimeout(function exec(){
        console.log("Timer done");
    },10);
}

for(let i=0;i<1000000000;i++){
    // some task // 10s
}

console.log("end");
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->317⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
x=setInterval(function(){
    console.log("Hi! Abhinav");
},500);

console.log(x);
console.log(typeof x);

setTimeout(function(){
    clearTimeout(x);
},2000);
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->318(Promises)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*

🔥 Readability enhances.

🔥 they can sove the problem of inversion of control.

🔥 In JS, Promises are special type of objects that
    get returned immediately when we call them.

🔥 promises acts as a placeholder for the data we 
   hope to get back sometime in future.


🔥 In these promises objects we can attach the functionality,
   we want to execute once the future task is done.

😈 once the future task is done,promises will automatically
   execute the attached functionality.

🔥 x=fetch("https://www.xyz.com") ❤️ x={} 😜 fetch ===> (runtime feature)

👉 Assume fetch is written using promises then it will 
   immediately return a promise object which will act 
   act as a placeholder.

❤️ placeholder ===> (for the result)
*/


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->319⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*

🔥 1) How we can create a promise ??

🔥 2) How can we consume a promise ??

❤️ Promise ==> (may be we fulfill the promise)
          ==> (may be we don't fulfill the promise)

*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->320⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*

🔥 How to create a promise ??  |state||value| ==> property of Promise

👀 creation of a promise object is sync in nature.

    😜 state😜
        ||
👉 1)pending ==> when we create a new promise object 
                this is the default state.It represents
                work in progress.

                                        ==> fulfilled (value => argument of resolve)
        😈 (value => undefined) pending |
                                        ==> rejected (value => )

👉 2)fulfilled ==> if the operation is completed successfully.


👉 3)rejected ==> if operation was not successfull.

*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->321⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*

🔥 obj={x:10,y:20}

😈 keyword==>(new)

😈 (Promise) ==> Constructor

🔥 new Promise (f) ==> this constructor expects a callback

🔥 callback (f) ===> executor function

❤️.                    |. ==> resove,reject => these are functions (inbuilt)  |

🔥 new Promise(function(resolve,reject){

    // inside this function we can write our time consuming task 
})

🔥 whenever in the implementation of executor callback,you call the resolve function,the promise
   goes to a fulfilled state.

🔥 if you call the reject function,it goes to a rejected state.

🔥 and if you don't call anything,Promise remains in pending state.


🔥 with whatever argument we call resolve or reject with, gets assigned to the value property.



*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->323(Trying Promises)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
function getRandomInt(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}

function createPromiseWithLoop(){
    return new Promise(
        function executor(resolve,reject){
            for(let i=0;i<10000000;i++){}
            const num=getRandomInt(10);

            if(num%2==0){
                // if the random number is even we fullfill
                resolve(num);

            }else{
                // if the random number is odd we reject
                reject(num);
            }

    });
}


const x=createPromiseWithLoop();

console.log(x);
*/

/*

function getRandomInt(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}

function createPromiseWithTimeout(){
    return new Promise(
        function executor(resolve,reject){
            setTimeout(
                function(){
                    const num=getRandomInt(10);
        
                    if(num%2==0){
                        // if the random number is even we fullfill
                        resolve(num,10,20);
        
                    }else{
                        // if the random number is odd we reject
                        reject(num);
                    }
                },5000);
                });
}


const y=createPromiseWithTimeout();

console.log(y);
*/

//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L->325⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
function getRandomInt(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}

function createPromiseWithTimeout(){
    return new Promise(
        function executor(resolve,reject){
            setTimeout(
                function(){
                    const num=getRandomInt(10);
        
                    if(num%2==0){
                        // if the random number is even we fullfill
                        console.log("fulfilling");
                        return num;
        
                    }else{
                        // if the random number is odd we reject
                        console.log("rejecting");
                        return num;
                    }
                },5000);
                });
}


const y=createPromiseWithTimeout();

console.log(y);
*/


/*
function getRandomInt(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}

function createPromiseWithTimeout(){
    return new Promise(
        function executor(resolve,reject){
            setTimeout(
                function(){
                    const num=getRandomInt(10);
        
                    if(num%2==0){
                        // if the random number is even we fullfill
                        console.log("fulfilling");
                        resolve(num);
                        console.log("resolving again!");
                        resolve(num);
        
                    }else{
                        // if the random number is odd we reject
                        console.log("rejecting");
                        reject(num);
                        console.log("rejecting again");
                        reject(num);
                    }
                },5000);
                });
}


const y=createPromiseWithTimeout();

console.log(y);

*/


















