let str = '1(23(4)5)6789';
let arr = str.split('');
let zzz = 0;;
let zzz1 = 1;

// while (arr.includes("(")) {

let a = arr.indexOf("(");
let a1 = arr.indexOf('(', a + 1);
let b = arr.indexOf(")");
let b1 = arr.indexOf(')', b + 1)
if (a1 !== -1 && b > a1) {
    let insideHooks = arr.splice(a1, b - a1 + 1).slice(1, -1);
    arr.splice(a1, 0, zzz);
}
if (a !== -1) {
    let insideHooks = arr.splice(a, b - a + 1).slice(1, -1);
    arr.splice(a, 0, zzz1);
}
// }

console.log(arr);
console.log(a);