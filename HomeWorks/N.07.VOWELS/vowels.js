"use strict";
function vowelsFilter(input) {
    const vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    return input.toLowerCase().split('').filter(element => {
        return vowelsArr.indexOf(element) !== -1;
    }).length;
}

function vowelsForEach(input) {
    const vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    let sum = 0;
    input.toLowerCase().split('').forEach(element => {
        if (vowelsArr.indexOf(element) !== -1) sum++
    });
    return sum;
}

function vowelsReduce(input) {
    const vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    return input.toLowerCase().split('').reduce((sum, element) => {
        if (vowelsArr.indexOf(element) !== -1) {
            return sum + 1;
        } else {
            return sum;
        }
    }, 0);
}

let userString = prompt(`Введите строку...`, 'аоиеёэыуюяАОИЕЁЭЫУЮЯ');
console.log(vowelsFilter(userString));
console.log(vowelsForEach(userString));
console.log(vowelsReduce(userString));