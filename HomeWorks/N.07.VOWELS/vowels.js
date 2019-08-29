"use strict";
function vowels(input) {
    return input.toLowerCase().split('').filter(element =>
        element == 'а' ||
        element == 'о' ||
        element == 'и' ||
        element == 'е' ||
        element == 'ё' ||
        element == 'э' ||
        element == 'ы' ||
        element == 'у' ||
        element == 'ю' ||
        element == 'я').length;
}
let userString = prompt(`Введите строку...`, 'аоиеёэыуюяАОИЕЁЭЫУЮЯ');
console.log(vowels(userString));