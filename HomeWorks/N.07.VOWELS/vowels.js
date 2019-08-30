"use strict";
function vowels(input) {
    let vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    return input.toLowerCase().split('').filter(element => {
        return vowelsArr.indexOf(element) !== -1;}).length;
    }
let userString = prompt(`Введите строку...`, 'аоиеёэыуюяАОИЕЁЭЫУЮЯ');
    console.log(vowels(userString));