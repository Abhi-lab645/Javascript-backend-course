// console.log(this);


/*
const user={
    name:"Abhinav",
    greet:function(){
        console.log(`Hi! ${this.name}`);
    }
}

user.greet();
*/


/*
const user = {
  name: "Abhinav",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();
*/


/*

function Order(id,amount){
    this.id=id;
    this.amount=amount;
}

const o1=new Order(101,1000);
const o2=new Order (102,2000);

console.log(o1);
console.log(o2);

*/


/*
class User{
    constructor(name){
        this.name=name;
    }

    greet(){
        console.log(this.name);
    }
}

const u1=new User("Abhinav");

console.log(u1);

u1.greet();
*/



//🔥 Rule #7 — this with call(), apply(), bind()

//You can manually control this.

/*
function greet(){
    console.log(this.name);
}

const user={name:"Abhinav"};

greet.call(user);
*/

// this becomes user.


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️Understanding new keyword of js⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
class Product{
    constructor(name,price,description){
        this.name=name;
        this.price=price;
        this.description=description;
        // return "10";  // primitive ==> no effect
        // return {x:10};  
        // return this; // if you don't return anything,it is equal to saying return this;


    }

    display(){
        //print the product
    }
}

const p1=new Product("shoe",10000,"stylish shoe");

console.log(p1);
*/



/*
class User{

}

const u1=new User();

console.log(u1);

*/

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L-378(function constructors in js)⚡️⚡️⚡️⚡️⚡️⚡️


/*
function Product(name,price,description){
    this.name=name;
    this.price=price;
    this.description=description;

   
}


const p1=new Product("jeans","2000","comfortable jeans");

console.log(p1);

p1.display();
*/

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L-379 (Private properties inside js classes)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️


//Method 2: Private Fields (#) (Modern Way)

/*
class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }

    deposit(amount){
        this.#balance+=amount;
    }

    getBalance(){
        return this.#balance
    }
}

const acc1=new BankAccount(4000);

console.log(acc1);

acc1.deposit(6000);

console.log(acc1.getBalance());
*/


// 🔒 Real Industry Example: Bank Account System

/*
class BankAccount{
    #balance;
    #transactions;

    constructor(intialBalance){
        if(intialBalance<0){
            throw new Error("Initial balance cannot be negative");
            
        }
        this.#balance=intialBalance;
        this.#transactions=[];
    }
    // Getter

    get balance(){
        console.log("Accessing balance...");
        return this.#balance;
    }

    //Setter

    set balance(amount){
        throw new Error("Direct balance modification not allowed");
    }

    deposit(amount){
        if(amount<=0){
            throw new Error("Deposit must be positive");
        }
        this.#balance+=amount;
        this.#transactions.push({
            type:"DEPOSIT",
            amount,
            date:new Date()
        });
    }

    withdraw(amount){
        if (amount<=0){
            throw new Error("Withdrawal must be positive");
        }
        if (amount>this.#balance){
            throw new Error("Insufficient funds");
        }

        this.#balance-=amount;
        this.#transactions.push({
            type:"WITHDRAW",
            amount,
            date:new Date()
        });
    }

    get transactionHistory(){
        return [...this.#transactions];
    }
}

const account=new BankAccount(5000);

account.deposit(300);

account.withdraw(200);

// console.log(account.balance);


console.log(account.transactionHistory);
*/


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L-381(Existence of prototypes)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
//Let’s say we create Order system:

function Order(id,amount){
    this.id=id;
    this.amount=amount;
}

// Now methods:

console.log(Order.prototype);

Order.prototype.calculateTax=function(){
    return this.amount*0.18;
};

Order.prototype.confirmOrder=function(){
    console.log("Order confirmed");
};



const o1=new Order(101,1000);
const o2=new Order(102,2000);


// console.log(o1.calculateTax());
// console.log(o2.calculateTax());



// o1.confirmOrder();

// console.log(o1);

// console.log(o1.__proto__);
// console.log(o2.__proto__);

// console.log(Order.prototype);
*/



/*
let user = {
  name: "Abhinav"
};

console.log(user);
*/


// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L-382(Underlying structure of JS Object prototypes)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️


/*
// 2️⃣ Constructor Function (Industry Pattern)

function Order(orderId,userId,amount){
    this.orderId=orderId;
    this.userId=userId;
    this.amount=amount;
    this.status="PENDING";
}

// This function acts like a blueprint for orders.


// 3️⃣ Methods Added to Prototype


Order.prototype.calculateTax=function(){
    return this.amount*0.18;
};

Order.prototype.confirmOrder=function(){
    this.status="CONFIRMED";
    console.log("Order confirmed:",this.orderId);
};

Order.prototype.cancelOrder=function(){
    this.status="CANCELLED";
    console.log("Order cancelled:",this.orderId);
};

// These methods are stored once in memory.

// 4️⃣ Creating Orders

const order1=new Order(101,"user1",2000);
const order2=new Order(102,"user2",3500);


console.log(order1);

console.log(Object.prototype);

*/

// let person = {'name' : 'John'}

// console.log(person);

// console.log(person.toString());

// console.log(typeof(Object));


/*
console.log(Object.prototype);

console.log(Object.prototype.constructor === Object); // true
*/


/*
function Person(name){
    this.name=name;
}

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}

const p1=new Person("Abhinav");

console.log(p1);

console.log(Person.prototype);

// console.log(p1.greet());

// let s=p1.toString();

// console.log(s);

// p1.fly();

let p2 = new Person('Jane');

// console.log(p2);

// console.log(p2.greet());

console.log(Object.prototype);

console.log(p1.__proto__);

console.log(p2.__proto__);

console.log(p1.__proto__===Person.prototype);
console.log(p1.__proto__===p2.__proto__);

console.log(Object.getPrototypeOf(p1));

console.log(p1.constructor.prototype);
*/


// 🔥 JavaScript Prototypal Inheritance 🔥

/*
let person={
    name:"Abhinav",
    greet:function(){
        return `Hi, I'm  ${this.name}`;
    }
};


console.log(person);

console.log(person.__proto__===Object.prototype);

let teacher={
    teach:function(subject){
        return `I can teach ${subject}`;
    }
};

teacher.__proto__=person;

console.log(teacher.name);
console.log(teacher.greet());
*/


/*
let person={
    name:"Abhinav",
    greet:function(){
        return `Hi I'm ${this.name}`;
    }
};

let teacher=Object.create(person,{
    name:{value: 'Pankaj' },
    teach:{value:function(subject){
        return "I can teach "+subject;
    }}
});


console.log(teacher.greet());

console.log(Object.getPrototypeOf(teacher)===person);

*/


/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(this.name + " logged in");
  }

  logout() {
    console.log(this.name + " logged out");
  }
}

class Customer extends User {
  constructor(name,email,cart) {
    super(name,email);
    this.cart = cart;
  }
}

const c1 = new Customer("Abhinav","abhi@gmail.com",[])



// console.log(Customer.__proto__);
*/



/*

// 1. First: What is a Static Method?

class User {

  constructor(name){
    this.name = name
  }

  static createGuest(){
    return new User("Guest")
  }

  login(){
    return `${this.name} logged in!`
  }

}

const guest = User.createGuest()

*/



/*
function greet() {
  console.log("Hello");
}

console.log(greet.__proto__.constructor);
*/


/*
const greet=new Function(`console.log("Hello")`);

console.log(greet);

greet();
*/

// Constructor Function


/*
function add(a,b){
    return a+b;
}


function User(name){
    this.name=name;
}

const u1=new User("Abhinav");

console.log(User.__proto__);

console.log(add.__proto__);

const user={name:"Ankit"};

const key="name";

console.log(user[key]);

console.log(user.name);



const namaste=new Function();
*/


//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥



/*
function calculateTotal(price,tax){
    return price+((price*tax)/100);
}

console.log(calculateTotal(100,18));

console.log(typeof(calculateTotal));

console.log(calculateTotal instanceof Function);

console.log(calculateTotal.__proto__ === Function.prototype);
*/



//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/*
const calculateTotal = new Function(
  "price",
  "tax",
  "return price + price * tax"
);


console.log(calculateTotal(100,0.18));
*/


//⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

/**
 * 8. Inspecting the Function Like an Object

    Functions also behave like objects.
 */


/*
function calculateTotal(price,tax){
    return price+price*tax;
}

calculateTotal.version="1.0";


console.log(calculateTotal.version);
*/



// 11. One Sentence That Explains Everything

/*❤️
Every function in JavaScript is an object created by 
the Function constructor and inherits methods 
from Function.prototype.
*/


/*
function User(name){
    this.name=name;
}

const u1=new User("Abhinav");


console.log(User.prototype.__proto__===Function.prototype.__proto__);
*/



/*
console.log(Object.__proto__===Function.__proto__);

console.log(Object.__proto__===Function.prototype);


function User(name){
    this.name=name;
}

const u1=new User("Abhinav");


User.prototype.greet=function(){
    console.log("hi",this.name);
}

console.log(u1);

console.log(User.prototype);

u1.greet();

console.log(u1.__proto__);

console.log(u1.toString());

console.log(Object.prototype);

console.log(u1.__proto__.__proto__.__proto__);



console.log(Object.__proto__===Function.prototype);

console.log(Function.__proto__==Function.prototype);


console.log(Function.prototype.__proto__===Object.prototype);
*/





































