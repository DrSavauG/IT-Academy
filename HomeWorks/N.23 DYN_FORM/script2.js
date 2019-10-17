"use strict";
var formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { label: 'Опубликовать:', kind: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { label: 'Зарегистрироваться:', kind: 'submit' },
    ];

function addLabelColumn(tr, text) {
    let td = document.createElement("td");
    let labelNode = document.createElement("div");
    labelNode.innerText = text;
    td.appendChild(labelNode);
    tr.appendChild(td)
}

function initForm(form, formDef) {
    let table = document.createElement("table")
    for (let elem of formDef) {
        let tr = document.createElement("tr")
        let tdValue = document.createElement("td");
        switch (elem.kind) {
            case 'longtext':
                addLabelColumn(tr, elem.label)
                let inputLong = document.createElement("input")
                inputLong.setAttribute("name", elem.name)
                inputLong.setAttribute("type", "text")
                inputLong.style.width = "400px"
                tdValue.appendChild(inputLong);
                break;

            case 'number':
                addLabelColumn(tr, elem.label)
                let inputNumber = document.createElement("input")
                inputNumber.setAttribute("name", elem.name)
                inputNumber.setAttribute("type", "number")
                tdValue.appendChild(inputNumber);
                break;

            case 'submit':
                let inputSubmit = document.createElement("input")
                inputSubmit.setAttribute("type", "submit")
                inputSubmit.setAttribute("value", elem.label)
                tdValue.appendChild(inputSubmit);
                break;

            case 'memo': addLabelColumn(tr, elem.label)
                table.appendChild(tr)
                tr = document.createElement("tr")
                let inputMemo = document.createElement("textarea")
                inputMemo.setAttribute("name", elem.name)
                tdValue.setAttribute("colspan", 2)
                inputMemo.style.width = "550px"
                inputMemo.style.height = "60px"
                tdValue.appendChild(inputMemo);
                break;

            case 'check': addLabelColumn(tr, elem.label)
                let inputCheck = document.createElement("input")
                inputCheck.setAttribute("name", elem.name)
                inputCheck.setAttribute("type", "checkbox")
                tdValue.appendChild(inputCheck);
                break;

            case 'radio': addLabelColumn(tr, elem.label)
                for (let variant of elem.variants) {
                    let inputRadio = document.createElement("input")
                    inputRadio.setAttribute("name", elem.name)
                    inputRadio.setAttribute("type", "radio")
                    inputRadio.setAttribute("value", variant.value)
                    tdValue.appendChild(inputRadio);
                    let labelInputRadio = document.createElement("span");
                    labelInputRadio.innerText = variant.text;
                    tdValue.appendChild(labelInputRadio);
                }
                break;

            case 'shorttext': addLabelColumn(tr, elem.label)
                let inputShort = document.createElement("input")
                inputShort.setAttribute("name", elem.name)
                inputShort.setAttribute("type", "text")
                inputShort.style.width = "200px"
                tdValue.appendChild(inputShort);
                break;

            case 'combo': addLabelColumn(tr, elem.label)
                let inputSelect = document.createElement("select");
                inputSelect.setAttribute("name", elem.name)
                for (let variant of elem.variants) {
                    let option = document.createElement("option")
                    option.setAttribute("value", variant.value)
                    option.innerText = variant.text;
                    inputSelect.appendChild(option);
                }
                tdValue.appendChild(inputSelect);
                break;
            // default: break;
        }
        tr.appendChild(tdValue);
        table.appendChild(tr);
    }
    form.appendChild(table);
}

initForm(document.form1, formDef1);
initForm(document.form2, formDef2);