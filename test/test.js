function randomDiap() {
    let n = 1;
    let m = 100;
    return ((Math.random() * (m - n + 1)) + n);
}

console.log(randomDiap());