"use strict";

function HashStorage() {
  this.storage = {};
}

HashStorage.prototype.addValue = function (key, value) {
  // сохраняет указанное значение под указанным ключом;
  this.storage[key] = value;
}

HashStorage.prototype.getValue = function (key) {
  // возвращает значение по указанному ключу либо undefined;
  if (key in this.storage) {
    return this.storage[key];
  }
  return undefined
}
HashStorage.prototype.deleteValue = function (key) {
  // удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
  if (key in this.storage) {
    delete this.storage[key];
    return true
  }
  return false
}
HashStorage.prototype.getKeys = function () {
  // возвращает массив, состоящий из одних ключей.
  return Object.keys(this.storage);
}
////

window.onload = function () {
  "use strict";
  // Создать объект drinkStorage класса HashStorage для хранения рецептов напитков.
  // Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
  var drinkStorage = new HashStorage();

  var table = document.querySelector('.table');

  // «ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
  var add = document.querySelector('.control .add');
  add.onclick = function () {
    var key = prompt('Введите название напитка', '');

    var value = (function () { 
      value = {};
      value.alcohol = confirm('Напиток алкогольный?');
      value.recept = prompt('Напишите рецепт', '');
      return value;
    })();

    console.log(drinkStorage);
    return drinkStorage.addValue(key, value);
  };

  // «получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
  var info = document.querySelector('.control .info');
  info.onclick = function () {
    var key = prompt('Введите название напитка', '');
    var value = drinkStorage.getValue(key);

    var answer = `\nНапиток: ${key};
                  \nАлкогольный: ${value.alcohol ? 'Да' : 'Нет'};
                  \nРецепт приготовления: ${value.recept}.`;

    table.innerHTML = answer;
  };

  // «удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.
  var del = document.querySelector('.control .del');
  del.onclick = function () {
    var key = prompt('Введите название напитка', '');
    table.innerHTML = drinkStorage.deleteValue(key);
  };

  // «перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).
  var list = document.querySelector('.control .list');
  list.onclick = function () {
    table.innerHTML = drinkStorage.getKeys().join(';\n');
  };

}