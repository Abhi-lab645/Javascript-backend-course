// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ L-363(async/await)  ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ 

/*
async function myFunc() {
    return 10;
}

console.log(myFunc());
*/


/*
function getData(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function data(){
            resolve("Data received");
        },3000);
    });
}




async function showData() {
    const result=await getData();
    console.log(result);
    return result;
}

const p=showData();
*/


/*
function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting to download data from",url);
        setTimeout(function down(){
            console.log("Downloading Completed");
            const content="ABCDEF" // assume dummy download content
            resolve(content);
        }, 6000);
    });

}

function writeFile(data){
    return new Promise(function exec(resolve,reject){
        console.log("started writing a file with",data);
        setTimeout(function write(){
            console.log("completed writing the data in a file");
            const filename="file.txt";
            resolve(filename);
        },5000);
    });
}

function uploadData(file,url){
    return new Promise(function exec(resolve,reject){
        console.log("satrted uploading",file,"on",url);
        setTimeout(function up(){
            console.log("upload completed");
            const response="SUCCESS";
            resolve(response);
        }, 5000);
    });
}



 async function steps(){
    const downloadedData=await download("www.xyz.com");
    console.log("data downloaded is",downloadedData);
    const fileWritten=await writeFile(downloadedData);
    console.log("file written is",fileWritten);
    const uploadResponse=await uploadData(fileWritten,"www.google.com");
    console.log("upload response is",uploadResponse);
    return uploadResponse;
}

steps().then((value)=>console.log("we have completed steps with",value));

console.log("outside");

for(let i=0;i<100000000;i++){

}


console.log("for loop done");

setTimeout(() => {
    console.log("timer done");
},4000);

*/


// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ L-367 (Error handling in promises)⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️


/*
function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting to download data from",url);
        setTimeout(function down(){
            console.log("Downloading Completed");
            const content="ABCDEF" // assume dummy download content
            reject(content);
        }, 2000);
    });

}

function writeFile(data){
    return new Promise(function exec(resolve,reject){
        console.log("started writing a file with",data);
        setTimeout(function write(){
            console.log("completed writing the data in a file");
            const filename="file.txt";
            resolve(filename);
        },4000);
    });
}

function uploadData(file,url){
    return new Promise(function exec(resolve,reject){
        console.log("satrted uploading",file,"on",url);
        setTimeout(function up(){
            console.log("upload completed");
            const response="SUCCESS";
            resolve(response);
        }, 6000);
    });
}

download("www.xyz.com")

.then(
    function processDownload(value){
        console.log("downloading done with following value",value);
        return writeFile(value);
    }
)

.then(
    function processWrite(value){
        console.log("data written in the file with name",value);
        return uploadData(value,"www.upload.com");
    }
)

.then(
    function processUpload(value){
        console.log("we have uploaded with",value);
    }
)
.catch(
    function f(err){
        console.log("catching error",err);
    }
)
*/

/*
Promise.resolve(10)
.then(num=>{
    return num*2;
})
.then(result=>{
    throw "Calculation Failed";   
})
.then(final=>{
    console.log(final); // never runs
})
.catch(error=>{
    console.log("Error:",error);
});
*/


//9️⃣ .finally() – Always Runs

//.finally() runs no matter what (success or error).

// Example 5: Cleanup logic


/*
Promise.reject("Failed")
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log("Error:", err);
})
.finally(() => {
    console.log("Cleanup done");
});

*/

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️L-368 (Error handling with async await) ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ 


/*
 * 1️⃣ Async/Await kya hai (1 line recap)

async/await = Promises ko likhne ka clean & readable tareeqa

Behind the scenes → still promises hi hoti hain
 
 */



/*

async function getData() {
    return "Hello";
}

const p=getData();
*/

/*
 👉  ⬆️ This actually returns a Promise

 🔥 2️⃣ Golden Rule (Yaad rakhna 🧠) 🔥

    ❌ Promise errors → .catch()
    ✅ async/await errors → try...catch
 */



/*

    3️⃣ Basic Error Handling with try–catch
    Example 1: Simple async error

*/


/*
async function fetchData() {
    try{
        let result=await Promise.reject("Network error");
        console.log(result);
    }catch(error){
        console.log("Caught:",error);
    }
}

fetchData();
*/



// 🔥 (Output)==>
//  Caught: Network error



/*
    📌 Rule:
    await ke saamne jo promise reject hota hai → 
    control directly catch me jump
*/


/*
    await Promise
    ↓
    Success → try block
    Error   → catch block

*/



/*

    7️⃣ Handling Multiple await calls
    Example 3: Multiple awaits, one try-catch
*/

/*
async function processData() {
    try {
        let a = await Promise.resolve(10);
        let b = await Promise.reject("Failed at step 2");
        let c = await Promise.resolve(30);
        console.log(a, b, c);
    } catch (err) {
        console.log("Error:", err);
    }
}

processData();
*/

/*

Output:
Error: Failed at step 2

📌 Error ke baad baaki awaits run hi nahi hote

*/

/*
    🔥 8️⃣ Catch ke baad continue karna (Recovery)
    Example 4: Graceful recovery
*/


/*
async function getUser() {
    try{
        let user=await Promise.reject("API down");


    }catch(err){
        console.log(err);
        return {name:"Guest User"};

    }
}

getUser().then(user=>console.log(user));
*/


/*
Output:

API down
{ name: 'Guest User' }


📌 Catch se value return → 
function resolved promise ban jaata hai🔥🔥
*/





/*
    9️⃣ finally with async/await (Always runs)
    Example 5: Cleanup logic
*/


/*

async function payment() {
    try{
        await Promise.reject("Payment Failed");

    }catch(err){
        console.log(err);
    }finally{
        console.log("Transcation closed");
    }
}

payment();

*/


/*
     Output:=>

Payment failed
Transaction closed

*/

// 1️⃣2️⃣ async function error → outside catch

/*
async function demo(){
    throw "Boom";
}

demo().catch(err=>console.log(err));
*/

// 📌 Async function always returns a Promise


/*
1️⃣3️⃣ Interview Mental Model 💡

👉 async/await = synchronous looking async code

👉 try-catch = Promise rejection handler

  🔥  Situation	            Solution 🔥

    Promise	                .catch()

    async/await	            try-catch

    Cleanup	                finally

    Recovery	            return value in catch
*/



// 1️⃣4️⃣ Mini Challenge 🧪 (Try without running)


/*
async function test() {
  try {
    let a = await Promise.resolve(5);
    let b = await Promise.reject("Oops");
    return a + b;
  } catch (e) {
    return 100;
  } finally {
    console.log("Done");
  }
}

test().then(res => console.log(res));
*/

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ L-370 (Promise dot all and similar functions) ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️ 


/*
                Alright Abhinav 😄

🔥     Promises can feel magical + confusing at first, 
    so let’s walk slowly, step-by-step, 
    with real examples and mental models. 
    By the end, you’ll feel what Promise.
    all and its cousins actually do. 🔥


0️⃣ First: Quick Promise refresher (1 minute)

A Promise represents a future result.


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});


❤️A promise can be in 3 states:❤️👉

    pending → still running

    fulfilled → success (resolve)

    rejected → failure (reject)

1️⃣ Why do we need Promise.all & friends?

Imagine this real-life situation:

    You order food, taxi, and movie tickets
    You want to proceed only when all are ready

Instead of handling promises one by one, JavaScript gives us Promise combinators.

2️⃣ Promise.all() – “ALL or NOTHING” 🧠

📌 What it does

Runs multiple promises in parallel

Resolves only when ALL promises resolve

Rejects immediately if ANY promise fails

✅ Syntax

Promise.all([promise1, promise2, promise3])
  .then(results => { })
  .catch(error => { });

*/

// 🧪 Example 1: Simple example

/*
const p1=Promise.resolve(10);
const p2=Promise.resolve(20);
const p3=Promise.resolve(30);

Promise.all([p1,p2,p3])
.then(values=>{
    console.log(values);
})
*/

// 🔑 Order is preserved, not completion time.


// 🧪 Example 2: Real-world async example

/*

function getUser(){
    return new Promise(function exec(resolve){
        setTimeout(() => {
            resolve("User Data")
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve)=>
        setTimeout(() => resolve("Posts Data"), 1500)
  );
}

function getComments() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Comments Data"), 500)
  );
}

Promise.all([getUser(),getPosts(),getComments()])
.then(data=>{
    console.log(data);
    // ["User Data", "Posts Data", "Comments Data"]
});

*/

/*
🧠 Mental Model
👉 “Wait for everyone to arrive, then start the party.”
*/

// ❌ What if one fails?

/*
const p1 = Promise.resolve("OK");
const p2 = Promise.reject("Failed!");
const p3 = Promise.resolve("OK");

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(err => console.error(err)); // "Failed!"

*/

// ⚠️ Even if p1 & p3 succeed → whole thing fails





