/*
const arr=[1,2,3,4,5,6]

console.log(arr.__proto__===Array.prototype);

console.log(Array.prototype.__proto__===Object.prototype);

console.log(arr instanceof Array);

arr.name="Abhinav";

console.log(arr.name);

console.log(arr);

console.log(Array.__proto__===Function.prototype);
 

console.log(typeof Array);

console.log(Array.__proto__===Function.prototype);
*/



/*
console.log(typeof String);

console.log(typeof Number);

console.log(typeof Boolean);
*/


/*
const student="Abhinav";

student.age=20;

console.log(student.age); // undefined
*/


// console.log(typeof [1,2,3,4]);



// ❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️


/*
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    login(){
        console.log("User logged in");
    }

}

class Admin extends User{
    constructor(name,email,role){
        super(name,email);
        this.role=role;
    }

    login(){
        
        super.login();

        console.log("Admin dashboard opened");
    }
    
}

const a=new Admin("Abhinav","abhinavgolu18072005@gmail.com","admin");

console.log(a);

a.login();
*/


// ❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️


// Example case with (this) property


/*
var obj={
    student:"Abhinav",
    company:"MedTech",
    display:()=>{
        console.log(student.name,"works in",this.company);
    }
}


console.log(this);

obj.display();
*/


/*

var obj1={
    student:"Abhinav",
    company:"Google",
    display:()=>{
        setTimeout(() => {
            console.log(this.student,"works in",this.company);
        },3000);
    }
}

obj1.display();

*/


/*

var obj2={
    student:"Abhinav",
    company:"Google",
    display:function(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.student,"works in",this.company);
        },3000);
    }
}

obj2.display();

*/


// ❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️

// call(),apply(),bind()


/*
function greet(){}

console.log(greet.call);
console.log(greet.apply);
console.log(greet.bind);
*/


/*
function introduce(){
    console.log(this.name,"is learning backend");
}

const student={
    name:"Abhinav"
};

introduce.call(student);
*/


/*
const player1={
    firstName:"Virat",
    lastName:"Kohli",
    numberToBat:3,
    canBowl:false,
    getdetails:function(){
        return `${this.firstName} ${this.lastName} comes at No ${this.numberToBat}`;
    }
}




const obj=function(){
    console.log(this.getdetails());
};

const fn=obj.bind(player1);

fn();
*/


/*
    5. bind() Method

    bind is different from call/apply.

    It does NOT execute immediately.

    It returns a new function with fixed this.

*/


/*
function introduce(role){
    console.log(this.name,"is",role);
}

const user={
    name:"Abhinav"
};

const fn=introduce.bind(user);


fn("Backend engineer");

*/


/*
    4. apply() Method

    👉 apply works exactly like call, only argument passing is different.

    👉 Syntax
        function.apply(thisArg, [arg1,arg2,arg3])

    👉 Arguments must be passed as array.
*/


/*
function introduce(city,role){
    console.log(this.name,"from",city,"works as",role);
}


const user={
    name:"Abhinav"
}

introduce.apply(user,["Bangalore","Backend Engineer"])
*/


// ❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️

// freeze,seal


/*
const user = {
  name: "Abhinav"
};


console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.freeze(user);

console.log(Object.getOwnPropertyDescriptor(user,"name"));
*/


// ❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️❤️    ❤️

// L-391 (Debugging a complex set of functions)

/*
function Category(categoryName){
    this.categoryName=categoryName;

    this.getCategoryName=function(){
        console.log(this.categoryName);
    }
}

function Product(name,price,categoryName){
    this.name=name;
    this.price=price;
    Category.call(this,categoryName);


}




const p=new Product("iphone",1000000,"Electronics");


console.log(p);

p.getCategoryName();
*/
















