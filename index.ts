/**
 * Created by dimFora on 29.09.2016.
 */

// Получаем элемент DOM
let inner = document.querySelector('.js-inner') as HTMLElement;
alert(  inner.innerHTML );

// Меняем текст и содержание элемента.
inner.innerHTML = 'Ворона птица умная';
inner.style.color = 'red';

// Используя метод forEach выводим содержание BODY в алерт
let childBodyNodes = document.body.childNodes as NodeList;
let forEach = Array.prototype.forEach;
forEach.call( childBodyNodes, (i)=> alert( `From BODY: ${i}` ) );

// Используя метод forEach выводим содержание HEAD в алерт
let childHeadNodes = document.head.childNodes as NodeList;
forEach.call(childHeadNodes, i => alert( `From HEAD: ${i}` ));

