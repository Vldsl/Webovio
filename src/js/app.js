// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();

// Menu
const iconMenu = document.querySelector('.icon-menu');
// const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
// const menuClose = document.querySelector('.menu__close');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('active');
		document.body.classList.toggle('lock');
		menu.classList.toggle('active');
		// page.classList.add('active_bg');
	});
	// menuClose.addEventListener('click', () => {
	// 	document.body.classList.remove('lock');
	// 	menu.classList.remove('active');
	// 	page.classList.remove('active_bg');
	// });
	// page.addEventListener('click', () => {
	// 	document.body.classList.remove('lock');
	// 	menu.classList.remove('active');
	// 	page.classList.remove('active_bg');
	// });
}