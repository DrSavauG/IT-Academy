"use strict";
function vowels(input) {
    const stringLowerSplit = input.toLowerCase().split('');;
    return stringLowerSplit.filter(element =>
        element == 'а' ||
        element == 'о' ||
        element == 'и' ||
        element == 'е' ||
        element == 'ё' ||
        element == 'э' ||
        element == 'ы' ||
        element == 'у' ||
        element == 'ю' ||
        element == 'я').length
}
let userString = prompt(`Введите строку...`, 'аоиеёэыуюяАОИЕЁЭЫУЮЯ');
console.log(vowels(userString));


