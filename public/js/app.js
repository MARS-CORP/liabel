(function () {
	'use strict';

	let menu = document.querySelector('.menu');
	let closeMenu = document.querySelector('.menu-close');

	menu.addEventListener('click', () => {
		document.querySelector('#navigation').classList.add('active');
	});
	closeMenu.addEventListener('click', () => {
		document.querySelector('#navigation').classList.remove('active');
	});

	let addProductButton = document.querySelector('#agregar-pedido');
	//Create link field and input filed with their attributes
	addProductButton.addEventListener('click', (e) => {
        e.preventDefault();
		let divLink = document
			.createElement('div')
			.setAttribute('class', 'col-sm-12 col-md-8');
		let inputLink = document.createElement('input');

		inputLink.id = 'linkProducto';
		inputLink.className = 'form-control mb-2';
		inputLink.name = 'linkProducto';
		inputLink.type = 'url';
		inputLink.placeholder = 'link';

		divLink.appendChild(inputLink);
	});
})();
