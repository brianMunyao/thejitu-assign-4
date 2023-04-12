const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
	if (mobileNav.classList.contains('nav-opened')) {
		mobileNav.classList.remove('nav-opened');
	} else {
		mobileNav.classList.add('nav-opened');
	}
});
