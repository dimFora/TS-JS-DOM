/**
 * Created by dimFora on 29.09.2016.
 */
// Получаем элемент DOM
var inner = document.querySelector('.js-inner');
alert(inner.innerHTML);
// Меняем текст и содержание элемента.
inner.innerHTML = 'Ворона птица умная';
inner.style.color = 'red';
// Используя метод forEach выводим содержание BODY в алерт
var childNodes = document.body.childNodes;
var forEach = Array.prototype.forEach;
forEach.call(childNodes, function (i) { return alert(i); });
