const menu = (activeClass)=>{
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	const closeBtn = menu.querySelector('.close-btn');
	const menuItems = menu.querySelectorAll('ul>li>a');
	const linkDown = document.querySelector('a[href="#service-block"]');

	const handleMenu = ()=>{
		menu.classList.toggle(activeClass);
	}

	const smoothMenu = () =>{
		menuItems.forEach(e=>{
			e.addEventListener('click', (event)=>{
				smoothScroll(e)
			})
		})
	}
	const linkSmooth = () => {
		linkDown.addEventListener('click', (event)=>{
			smoothScroll(linkDown)
		})
	}
	const smoothScroll = (elem) =>{
			event.preventDefault();
			const blockID = elem.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
	}
	
	linkSmooth()
	smoothMenu()
	menuBtn.addEventListener('click', handleMenu);
	closeBtn.addEventListener('click', handleMenu);

	menuItems.forEach(e => e.addEventListener('click', handleMenu));
}

export default menu