// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';
//  function calculate(params) {

    let enteredCut = params.replace(/\s/g, '').replace(/[-]/g, '•-').replace(/[+]/g, '•+').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').replace(/[(]/g, '•(•').replace(/[)]/g, '•)•').split('•').filter(nul => nul);

    if (enteredCut.includes("(")) {
        let start = enteredCut.indexOf("(");
        let fin = enteredCut.lastIndexOf(")");
        
        enteredCut = enteredCut.splice(start, fin - start, calculate(enteredCut.substring(start, fin + 1).slice(1, -1)));//???????
    }

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
    //  return 
     Number(enteredCut.join());
//  }
let params = "2*(-3+1)";
// console.log(calculate(str));

console.log(eval(str));//проверка eval-om