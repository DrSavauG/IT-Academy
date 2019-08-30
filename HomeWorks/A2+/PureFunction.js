function deleteFirstLastGap(string) {
    var from = 0;
    var to = string.length - 1;

    for (; string.charAt(from) == ' '; from++);
    if (from == string.length) {
        return '';
    }
    for (; string.charAt(to) == ' '; to--);
    if (from == 0 && to == string.length - 1) {
        return string;
    } else {
        string = string.substring(from, to + 1);
        return string;
    }
}
let input = prompt(`Введите строку... `, '');
console.log(deleteFirstLastGap(input));

/*
// для тестирования
let input2 = ' ';
console.log(deleteFirstLastGap(input2));
input2 = '           ';
console.log(deleteFirstLastGap(input2));
input2 = '   <пробел>           ';
console.log(deleteFirstLastGap(input2));
input2 = '               <пробел>   ';
console.log(deleteFirstLastGap(input2));
input2 = '          <пробел>  ';
console.log(deleteFirstLastGap(input2));
input2 = ' <пробел>                   ';
console.log(deleteFirstLastGap(input2));
input2 = '                <пробел!';
console.log(deleteFirstLastGap(input2));
input2 = '!пробел>                   ';
console.log(deleteFirstLastGap(input2));
*/