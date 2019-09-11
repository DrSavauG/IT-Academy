// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';
function calculate(params) {
    let arr = params.replace(/\s/g, '').replace(/[-]/g, '•-').replace(/[+]/g, '•+').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').replace(/[(]/g, '•(•').replace(/[)]/g, '•)•').split('•').filter(nul => nul);

    function counting(arr) {
        if (arr.includes("(")) {
            let start = arr.indexOf("(");
            let fin = arr.lastIndexOf(")");

            // достать из массива скобки с цифрами
            // удалить скобки
            let insideHooks = arr.splice(start, fin - start + 1).slice(1, -1);
            // передать без скобок в рекурсию
            // counting(insideHooks);
            // вставить посчитанное в массив ввместо старого
            arr.splice(start, 0, counting(insideHooks));

            // обернуть в функцию if
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
let str = "2*((-3)+1)";
console.log(calculate(str));

console.log(eval(str));//проверка eval-om
// //////////
// let str = '12(3456)7890';
// console.log(arr);
// var arr = str.split('');
// console.log(arr);
// let start = arr.indexOf("(");
// let fin = arr.lastIndexOf(")");
// let insideHooks = arr.splice(start, fin - start + 1).slice(1, -1)
// console.log(insideHooks);
// console.log(arr);
// insideHooks = 'zzzz';
// console.log(insideHooks);
// arr.splice(start, 0, insideHooks);
// console.log(arr);
