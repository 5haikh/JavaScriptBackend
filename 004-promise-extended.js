function myPromise() {
    return new Promise(function (resolve) {
        console.log("first")
        setTimeout(resolve, 2000);
    });
}

const p = myPromise();
console.log("second")
p.then(function() {
    console.log("Hello")
});


// console.log("1. Creating promise");

// let pm1 = new Promise(function (resolve) {
//     console.log("2. Inside executor");  // this runs immediately
//     setTimeout(function () {
//         console.log("3. Resolving promise");
//         resolve("Last promise");
//     }, 3000);
// });

// console.log("4. After promise creation");

// pm1.then(function(value) {
//     console.log("5. Then received:", value);
// });
