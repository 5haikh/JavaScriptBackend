p = new Promise(function (resolve) {
    resolve("This promise is resolved.");
})

function printData(data){
    console.log(data);
}

console.log("This is before promise");
p.then(printData)
console.log("This is after promise");