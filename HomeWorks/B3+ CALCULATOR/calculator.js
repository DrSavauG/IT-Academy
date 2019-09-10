// B3+
// Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.
'use string';

let entered = "-1+5/-2*4/-3";
enteredCut = entered.replace(/\s/g, '').replace(/[-]/g, '•-').replace(/[+]/g, '•+•').replace(/[*]/g, '•*•').replace(/[/]/g, '•/•').split('•').filter(nul => nul);
// 
console.log(enteredCut);
// 
function counting(mathSigh) {
    while (enteredCut.includes(mathSigh)) {
        let i = enteredCut.indexOf(mathSigh);
        enteredCut.splice(enteredCut.indexOf(mathSigh) - 1, 3, enteredCut[i - 1] / enteredCut[i + 1])
    }    
}
counting('/');
console.log(enteredCut);
counting('*');
console.log(enteredCut);
counting('+');
console.log(enteredCut);