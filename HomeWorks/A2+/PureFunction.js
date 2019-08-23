function deleteFirstLastGap(newString) {

    var from = 0;
    while (newString.charAt(from) == ' ') from++;
    var to = newString.length - 1;
    while (newString.charAt(to) == ' ') to--;
    newString = newString.substr(from, to + 1);
    return newString;
}
let input = prompt(`Введите строку... `,'');
console.log(deleteFirstLastGap(input));
