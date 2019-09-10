// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';
function calculate(params) {
    let sum = 0;
    // if (params.indexOf("(")) {
    //     let x = params.indexOf("(");
    //     let y = params.lastIndexOf(")");
    //     calculate(params.substring(x, y + 1).slice(1, -1));
    // }
    let enteredCut = params.replace(/\s/g, '').replace(/[-]/g, '•-').replace(/[+]/g, '•+').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').split('•').filter(nul => nul);

    while (enteredCut.includes('/')) {
        let i = enteredCut.indexOf('/');
        enteredCut.splice(enteredCut.indexOf('/') - 1, 3, +enteredCut[i - 1] / +enteredCut[i + 1]);
    }

    while (enteredCut.includes('*')) {
        let i = enteredCut.indexOf('*');
        enteredCut.splice(enteredCut.indexOf('*') - 1, 3, +enteredCut[i - 1] * +enteredCut[i + 1]);
    }

    enteredCut = enteredCut.join('•+•').split('•');

    while (enteredCut.includes('+')) {
        let i = enteredCut.indexOf('+');
        enteredCut.splice(enteredCut.indexOf('+') - 1, 3, +enteredCut[i - 1] + +enteredCut[i + 1]);
    }
    return sum + Number(enteredCut.join());
}
let str = "2*(-3+1)";
console.log(calculate(str));

console.log(eval(str));//проверка eval-om