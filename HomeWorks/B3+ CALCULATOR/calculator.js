// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';
function calculate(params) {
    let arr = params.replace(/\s/g, '').replace(/[-]/g, '•-•').replace(/[+]/g, '•+•').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').replace(/[(]/g, '•(•').replace(/[)]/g, '•)•').split('•').filter(nul => nul);

    function counting(arr) {
        while (arr.includes("(")) {
            let a = arr.indexOf("(");
            let a1 = arr.indexOf('(', a + 1);
            let b = arr.indexOf(")");
            if (a1 !== -1 && b > a1) {
                let insideHooks = arr.splice(a1, b - a1 + 1).slice(1, -1);
                arr.splice(a1, 0, counting(insideHooks));
            }
            if (arr.includes("(")) {
                a = arr.indexOf("(");
                b = arr.indexOf(")");
                insideHooks = arr.splice(a, b - a + 1).slice(1, -1);
                arr.splice(a, 0, counting(insideHooks));
            }
        }
        while (arr.includes('/')) {
            let i = arr.indexOf('/');
            arr.splice(i - 1, 3, +arr[i - 1] / +arr[i + 1]);
        }
        while (arr.includes('*')) {
            let i = arr.indexOf('*');
            arr.splice(i - 1, 3, +arr[i - 1] * +arr[i + 1]);
        }
        while (arr.includes('-')) {
            let i = arr.indexOf('-');
            if (i == 0) arr.splice(i, 2, -arr[i + 1]);
            else arr.splice(i - 1, 3, +arr[i - 1] - +arr[i + 1]);
        }
        while (arr.includes('+')) {
            let i = arr.indexOf('+');
            if (i == 0) arr.splice(i, 2, arr[i + 1]);
            else arr.splice(i - 1, 3, +arr[i - 1] + +arr[i + 1]);
        }
        return Number(arr.join());
    }
    return counting(arr);
}
let str = prompt('Введите выражение', "-7.1*(1.01)-(.5)-2*(-1)");
console.log(`${calculate(str)}  ||  ${eval(str) == calculate(str)}`);