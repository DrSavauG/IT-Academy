function randomDiap(n, m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}
let n = -1;
let m = 1;
for (let i = 0; i < 100; i++) {

    console.log(randomDiap(n, m));
}
//Math.floor(Math.random()*(m-n+1))+n
//return ((Math.random() * (m - n + 1)).toFixed(3) + n);
console.log(123.1234567890.toFixed(3));