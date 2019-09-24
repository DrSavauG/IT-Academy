function randomDiap() {
    let n = 1;
    let m = 2;
    return ((Math.random() * (m - n + 1)) + n).toFixed(5)
}
for (let i = 0; i < 100; i++) {

    console.log(randomDiap());
}
//Math.floor(Math.random()*(m-n+1))+n
//return ((Math.random() * (m - n + 1)).toFixed(3) + n);