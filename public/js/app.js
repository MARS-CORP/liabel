(function () {
	'use strict';

	let menu = document.querySelector('#nav-section .menu img');
	let closeMenu = document.querySelector('.menu-close');

	menu.addEventListener('click', () => {
		document.querySelector('#navigation').classList.add('active');
	});
	closeMenu.addEventListener('click', () => {
		document.querySelector('#navigation').classList.remove('active');
	});

})();
