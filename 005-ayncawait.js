function myPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve ("Hi There");
        }, 3000);
    })
}


async function main() {
    let value = await myPromise();
    console.log("After await");
    console.log(value);
}

main();
console.log("After main");