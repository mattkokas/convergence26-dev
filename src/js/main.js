import '@babel/polyfill';

import LazyLoad from "vanilla-lazyload";

var myLazyLoad = new LazyLoad();

var navToggleOpen = document.getElementById('nav-toggle-open');
var navToggleClose = document.getElementById('nav-toggle-close');
var navContainer = document.querySelector('.masthead__nav');

navToggleOpen.addEventListener('click', function(ev) {
   ev.preventDefault();
   navContainer.classList.add('masthead__nav--open');
});

navToggleClose.addEventListener('click', function(ev) {
   ev.preventDefault();
   navContainer.classList.remove('masthead__nav--open');
});
