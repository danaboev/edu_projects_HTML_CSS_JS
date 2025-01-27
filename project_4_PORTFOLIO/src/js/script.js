const   hamburger  = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	 menu.classList.add('active');
});      

close.addEventListener('click', () => {
	menu.classList.remove('active');
});      

const conuters = document.querySelectorAll('.tech__rating-counter'),
	lines = document.querySelectorAll('.tech__rating-line span');

conuters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
	
});