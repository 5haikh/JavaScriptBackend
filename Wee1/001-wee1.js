console.log("Hello world");

// variable - let, var, const-------------------------------------------------------------------------------------
firstName = "Faiz";
lastName = "Shaikh";
console.log("Hello, " + firstName + " " + lastName);

gender = "Male";
if (gender == "Male") {
    console.log("How are you, Mr?");
}
else {
    console.log("How are you, Mrs?");
}

// Array,Object----------------------------------------------------------------------------------------------------
let myArr = [234, 245, 264, 132, 543];
console.log("Length of myArr is : " + myArr.length);
console.log("Last value in myArr is : " + myArr[myArr.length - 1]);
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 == 0) {
        console.log("Even number in myArr is : " + myArr[i]);
    }
}
let largest = myArr[0];
for (let i = 0; i < myArr.length; i++) {
    if (largest < myArr[i]){
        largest = myArr[i];
    }
}
console.log("Biggest number is myArr is ; " + largest);

let mid = 0;
if (myArr.length % 2 == 0) {
    mid = myArr.length / 2;
}
else {
    mid = myArr.length / 2 - 1; // other language this might impact.
}
console.log("Middle index of array is : " + mid);
let temp = 0;
for (let i = 0; i < mid; i++) {
    temp = myArr[i];
    myArr[i] = myArr[myArr.length - 1 - i];
    myArr[myArr.length - 1 - i] = temp;
}
console.log("Reversed array is : " + myArr);


let myObj = [
    {
        name: "Faiz",
        age: 21,
        gender: "male"
    },
    {
        name: "shaikh",
        age: 24,
        gender: "male"
    },
    {
        name: "faiza",
        age: 22,
        gender: "female"
    }
]
for (let i = 0; i < myObj.length; i++) {
    if (myObj[i].gender == "male") {
        console.log("Mr. " + myObj[i].name + " age is " + myObj[i].age);
    }
}


// functions--------------------------------------------------------------------------------------------
function printResult (a, b, result) {
    console.log("Sum of " + a + " and " + b + " is " + result);
}
function sum (a, b, func) {
    func(a, b, a + b);
}
sum(10, 5, printResult);

// function greet() {
//     setTimeout(function () {
//         console.log("Hello");
//     }, 3 * 1000); // will execute in async, program will not wait for 3 secons to be compeleted.
// }
// greet();
// console.log("Faiz"); // this will be called first.

// count = 0;
// intervalID = setInterval(function () {
//     count++;
//     if (count == 2) {
//         clearInterval(intervalID);
//     }    
//     console.log("Printing for " + count + " times"); 
// }, 2* 1000);


// String functions
// indexOf, lastIndexOf, split, trim, slice(start index, end index(excluded)), toUpperCase, toLowerCase

// Number functions
// parseInt, parseFloat => return Nan if not found

//Class
class Animal {
    constructor (name) {
        this.name = name;
    } 
    speak () {
        console.log("Animal name is : " + this.name);
    }
    static classfunc () {  // Static function can be called without instanciating an object
        console.log("This is static function");
    }
}

dog = new Animal("Dog");
dog.speak();
console.log(Animal.classfunc());

//Date 
let currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getTime()); //Time in milliseconds

//Json - javascript object notation Json.parse Json.stringfy
str1 = '{"name": "faiz", "age": 21}'
console.log(JSON.parse(str1).name);
console.log(JSON.stringify(str1));

//Object 
let myObj1 = {
    name: "faiz",
    age: "26",
    gender: "male"
}
console.log(Object.keys(myObj1));
console.log(Object.values(myObj1));
console.log(Object.entries(myObj1));
console.log(myObj1.hasOwnProperty("name"));

for(let i = 1; i == 1; i++){       //after intialization it's check for condition
    console.log("This is loop")
}




