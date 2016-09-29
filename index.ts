/**
 * Created by dimFora on 29.09.2016.
 */

let inner = document.querySelector('.js-inner') as HTMLElement;
alert(  inner.innerHTML );

inner.innerHTML = 'Ворона птица умная';
inner.style.color = 'red';
