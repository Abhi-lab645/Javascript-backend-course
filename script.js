// let pImg=document.getElementById("p-img");
// let btn=document.getElementById("btn");

// btn.addEventListener("click",function(){
//     pImg.setAttribute("src","download.jpeg")
// })

// console.log( typeof btn);

const btn=document.getElementById("btn");

console.log(document.getElementsByTagName("body"));


btn.addEventListener("click",function(){
    const img=document.createElement("img");
    img.src="download.jpeg";
    document.body.appendChild(img);
    
})