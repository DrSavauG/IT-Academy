function deleteFirstLastGap(string) {
    var from = 0;
    var to = string.length - 1;
    if (string.charAt(from) != ' ' && string.charAt(to) != ' ') {
        return string;
    } else {
        for (from; string.charAt(from) == ' '; from++);
        if (from == string.length) {
            return ''; // или undefined?
        } else {
            for (to; string.charAt(to) == ' '; to--);
            string = string.substring(from, to + 1);//.substr некорректно убирал справа
            return string;
        }
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