// N.13 Домашнее задание DRINKS_HASH_FUNC
// Создать проект DRINKS_HASH_FUNC.
// 1.
// Разработать класс HashStorageFunc в функциональном стиле (т.е. функцию-конструктор) для хранения в хэше произвольных пар ключ-значение.
// Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
'use strict';
function HashStorageFunc() {
    var storage = {};

    this.addValue = function (key, value) {// addValue(key,value) — сохраняет указанное значение под указанным ключом;
        storage[key] = value;
    }

    this.getValue = function (key) {// getValue(key) — возвращает значение по указанному ключу либо undefined;
        storage[key];
    }
    this.getKeys = function () {// getKeys() — возвращает массив, состоящий из одних ключей.
        return Object.keys(storage);
    }

    this.deleteValue = function (key) { // deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
        if (key in storage) {
            delete storage[key];
            return true;

        } else return false;

    }
}


var drinkStorage = new HashStorageFunc();// Создать объект drinkStorage класса HashStorageFunc для хранения рецептов напитков.
console.log(drinkStorage)


// 3.
// Разработать веб-страницу для работы с хранилищем рецептов напитков.

// На странице должны быть кнопки:
// let addButton,infoButton,

addButton.onclick = () => {// «ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
    var drinkName = prompt('Введите название напитка', '');
    var alco = confirm(`Алкогольный? `);
    var recept = prompt(`Введите рецепт... `, '');
    drinkStorage.addValue(drinkName, { a: alco, r: recept })
    console.log(drinkStorage);
}
// console.log(drinkStorage)
getButton.onclick = () => {// «получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
    var drinkName = prompt(`Введите название напитка ...`, '');
    var i = drinkStorage.getValue(drinkName);
    console.log(i);
    alert(`
    Напиток: ${drinkName}
    Алкогольный: ${i.alco ? 'Да' : 'Нет'}
    Рецепт: ${i.recept}
    `)
}
deleteButton.onklick = () => {// «удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.te
    var deleteName = prompt('Введите название напитка для удаления', '');
    drinkStorage.deleteValue(key);
}
// «перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).
listButton.onklick = () => {
    drinkStorage.getKeys().join(';\n');
}


/*
// Пример информации о напитке:

// напиток Маргарита
// алкогольный: да
// рецепт приготовления:
// продукт, продукт... смешать...
// addButton_onclick;

*/