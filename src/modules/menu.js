const menu = (activeClass)=>{
	const menu = document.querySelector('menu');

	const handleMenu = ()=>{
		menu.classList.toggle(activeClass);
	}

	const smoothScroll = (elem) =>{
		event.preventDefault();
		const blockID = elem.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
}

	document.addEventListener('click', e => {
		if(e.target.closest('.menu') || !e.target.closest('menu') && menu.classList.contains(activeClass)){
			handleMenu();
		}else if(e.target.closest('main>a[href="#service-block"]')){
			let linkDown = e.target.closest('main>a[href="#service-block"]')
			smoothScroll(linkDown)
		}
	})

	menu.addEventListener('click', e => {
		if(e.target.matches('menu>ul>li>a')){
				smoothScroll(e.target)
				handleMenu();
		} else if(e.target.classList.contains('close-btn')){
			handleMenu();
		}
	})

}

export default menu