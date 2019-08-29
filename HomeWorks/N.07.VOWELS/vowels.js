"use strict";
function vowels(input) {
    const stringLowerSplit = input.toLowerCase().split('');;
    var sum = 0;
    stringLowerSplit.forEach(element => {
        if (element == 'а' ||
            element == 'о' ||
            element == 'и' ||
            element == 'е' ||
            element == 'ё' ||
            element == 'э' ||
            element == 'ы' ||
            element == 'у' ||
            element == 'ю' ||
            element == 'я') {
            sum++;
        }

    });
    return sum;
}
function vowels2(input) {
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
console.log(vowels2(userString));
console.log(vowels(userString));

