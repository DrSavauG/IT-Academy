// A4+
// Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом, с использованием рекурсии.
// Массивы при решении не использовать.
// При проверке должны игнорироваться:
//  - регистр букв;
//  - пробелы;
//  - знаки препинания;
//  - мягкие и твёрдые знаки;
//  - разница между буквами "е" и "ё".

 'use strict';

function isPalindromFor(input) {
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '')
    for (let index = 0; index < Math.floor(fixPhrase.length / 2); index++) {
        if (fixPhrase[index] !== fixPhrase[fixPhrase.length - index - 1]) {
            return false
        }
    } return true
}
let phrase = prompt(`Введите фразу...`, 'А за работу дадут? – Оба раза!');
console.log(isPalindromFor(phrase));