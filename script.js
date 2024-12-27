//   global scope hota h 
// redeclare and ressign kiya ja sakta 
var name2 ="asmita";
var name2 ="Anshi";         
console.log(name2);

// redeclare and ressign nhi kiya ja skta h 
let city = "chhtarpur";
console.log(city);


// redeclare and ressign nhi kiya ja skta h 
// block scope hota h 
 const  pi="usha";
 console.log( typeof pi);


// global scope
let Email1 = "ushaahirwarahirwar@4gamil.com";
const password1 = "usha@123";
const contact=9039947006;
console.table([Email,password,contact]);


// fuction scope

function exaple(){
    let Email="asmita@gamil.com";
    const password ="Asmita@123";
    var comment="Any thing";
    console.table([Email,password,comment]);
}
exaple();

// console m print karane ke liye
let x = "john";
const y ="honny";
console.log(y);

const arr = [1,2,3,4,5]
console.log("Get Array----",arr)

arr.splice(1,2)
console.log("Get Spliced array----",arr)


let age1=20;
let name="usha";
console.log(age1+" "+name);



// if condition 
let age=21;
if(age<20)
{
console.log("you can vate");
}
else
{
console.log("you can not vate");
}


    
// loop
for (var i=1; i<5; i++){
    console.log("iteratio:");
}
