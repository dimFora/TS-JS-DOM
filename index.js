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
var childBodyNodes = document.body.childNodes;
var forEach = Array.prototype.forEach;
forEach.call(childBodyNodes, function (i) { return alert("From BODY: " + i); });
// Используя метод forEach выводим содержание HEAD в алерт
var childHeadNodes = document.head.childNodes;
forEach.call(childHeadNodes, function (i) { return alert("From HEAD: " + i); });
