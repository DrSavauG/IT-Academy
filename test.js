let str = '123(456)789';
let arr = str.split('');
let zzz = 0;;
let zzz1 = 1;
function name() {
    while (arr.includes("(")) {

        let a = arr.indexOf("(");
        let a1 = arr.indexOf('(', a);
        let b = arr.indexOf(")");
        let b1 = arr.indexOf(')', b)
        if (b < a1 && a1 > 0) {
            let insideHooks = arr.splice(a, b - a + 1).slice(1, -1);
            arr.splice(a, 0, zzz);
        } else {
            let insideHooks = arr.splice(a1, b - a1 + 1).slice(1, -1);
            arr.splice(a, 0, zzz1);
        }
    }
    return arr
}

console.log(name(arr));