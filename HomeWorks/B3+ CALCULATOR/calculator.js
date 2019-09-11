// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';
function calculate(params) {
    let arr = params.replace(/\s/g, '').replace(/[-]/g, '•-').replace(/[+]/g, '•+').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').replace(/[(]/g, '•(•').replace(/[)]/g, '•)•').split('•').filter(nul => nul);

    function counting(arr) {
        while (arr.includes("(")) {
            let start = arr.indexOf("(");
            let fin = arr.indexOf(")");
            let insideHooks = arr.splice(start, fin - start + 1).slice(1, -1);
            arr.splice(start, 0, counting(insideHooks));
        }
        while (arr.includes('/')) {
            let i = arr.indexOf('/');
            arr.splice(arr.indexOf('/') - 1, 3, +arr[i - 1] / +arr[i + 1]);
        }
        while (arr.includes('*')) {
            let i = arr.indexOf('*');
            arr.splice(arr.indexOf('*') - 1, 3, +arr[i - 1] * +arr[i + 1]);
        }
        arr = arr.join('•+•').split('•');
        while (arr.includes('+')) {
            let i = arr.indexOf('+');
            arr.splice(arr.indexOf('+') - 1, 3, +arr[i - 1] + +arr[i + 1]);
        }
        return Number(arr.join());
    }
    return counting(arr);
}
let str = prompt('Введите выражение', "2*(-3+1)*(1-2)");
console.log(eval(str) + ' = eval');
console.log(calculate(str));
