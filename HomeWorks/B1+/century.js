'use strict';
function whichCentury(input) {
    return Math.ceil(+ input / 100);
}
let userString = prompt(`Введите год`, `1984`);
alert(`${userString} год - ${whichCentury(userString)} век`);