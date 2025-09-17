// Map
const arr = [1, 2, 3, 4, 5];

function multiplyByTwo(i, x, a) {
    // console.log(i);
    // console.log(x);
    // console.log(a);
    return i * i;
}

console.log(arr.map(multiplyByTwo));

// Filtering  - need function which returns true or false
function filterEven(i) {
    if(i % 2 == 0)
        return true;
    else 
        return false;
}
console.log(arr.filter(filterEven));

// Arrow function
const a = (x, y) => {
    return x + y;
}
console.log(a(10, 20))
