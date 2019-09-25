"use strict";
function squareRoots(a, b, c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                return Infinity;// бесконечно корней
            } else return null;// нет корней
        } return [-c / b];// один корень
    }

    if (b == 0) {
        if (c == 0) return [0];
        if (-c / a < 0) {
            return null;
        } else {
            x1 = Math.sqrt(-c / a);
            x2 = -x1;
            return [x1, x2];// два корня
        }
    }

    if (c == 0) {
        x1 = 0;
        x2 = -b / a;
        return [x1, x2];// два корня
    }
    //если никто не равен нулю
    var d = b * b - 4 * a * c; // дискриминант
    if (d < 0)
        return null; // нет корней
    if (d == 0)
        return [-b / (2 * a)]; // один корень
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2]; // два корня
}
// находим корни квадратного уравнения
function ttt() {
    var a = Number(prompt('Введите a'));
    var b = Number(prompt('Введите b'));
    var c = Number(prompt('Введите c'));
    var roots = squareRoots(a, b, c);
    if (roots === Infinity) return console.info('бесконечность!')
    if (roots === null) return console.info('Корней нет!');
    if (roots.length == 1) return console.info('Один корень: ' + roots[0]);
    if (roots.length == 2) return console.info('Два корня: ' + roots[0] + ' и ' + roots[1]);
    else console.error(` что тут творится?`)
}
function randomDiap(n, m) {
    // return ((Math.random() * (m - n + 1)) + n);// степень округления??
    return Math.floor(Math.random() * (m - n + 1)) + n
}

function squareRootsTestsFast() {// версия укороченных тестов, но быстрые
    const mistake = 1e-2;// степень погрешности
    let n = -1e7;
    let m = 1e7;
    // let na = -1;
    // let ma = 1;
    console.warn(`Tests start`);
    for (let i = 0; i < 1e6; i++) {
        let a = randomDiap(n, m);
        let b = randomDiap(n, m);
        let c = randomDiap(n, m);
        let roots = squareRoots(a, b, c);
        if (roots == Infinity) console.warn(`${i}: Infinity! `)
        if (roots !== Infinity && roots !== null && roots.length == 2) {// нет смысла проверять, при с==0 ошибки не будет, один корень
            let x1 = roots[0];
            let x2 = roots[1];
            let result1 = a * x1 * x1 + b * x1 + c;
            let result2 = a * x2 * x2 + b * x2 + c;
            if (Math.abs(0 - result1) > mistake) {
                console.error(`${i}: Fail with x1 = ${x1}; a = ${a}; b = ${b}; c = ${c}; 0 = ${result1}`);
            }
            if (Math.abs(0 - result2) > mistake) {
                console.error(`${i}: Fail with x2 = ${x2}; a = ${a}; b = ${b}; c = ${c}; 0 = ${result2}`);
            }
        }
    }
    console.warn(`Test completed`);
}

function squareRootsTests() {// версия тестов которые показвают все сообщения.но очень медленно
    const mistake = 1e-6;
    let n = -1e2;
    let m = 1e2;
    console.warn(`Tests start`);
    for (let i = 0; i < 1e4; i++) {
        let a = randomDiap(n, m);
        let b = randomDiap(n, m);
        let c = randomDiap(n, m);
        let roots = squareRoots(a, b, c);
        if (roots === Infinity) console.warn(`Бесконечно корней!`);
        else if (roots === null) console.warn(`Корней нет`);
        else if (roots.length == 1) {
            let x = roots[0];
            let result = a * x * x + b * x + c;
            if (Math.abs(0 - result) < mistake) {
                console.info(`Успешно`)
            } else console.error(`${i}: Fail with x = ${x}; a = ${a}; b = ${b}; c = ${c}; 0 = ${result}`);
        } else if (roots.length == 2) {
            let x1 = roots[0];
            let x2 = roots[1];
            let result1 = a * x1 * x1 + b * x1 + c;
            let result2 = a * x2 * x2 + b * x2 + c;
            if (Math.abs(0 - result1) < mistake) {
                console.info(`Успешно`);
            } else console.error(`${i}: Fail with x1 = ${x1}; a = ${a}; b = ${b}; c = ${c}; 0 = ${result1}`);
            if (Math.abs(0 - result2) < mistake) {
                console.info(`Успешно`);
            } else console.error(`${i}: Fail with x2 = ${x2}; a = ${a}; b = ${b}; c = ${c}; 0 = ${result2}`);
        }
    }
    console.warn(`Test completed`);
}
