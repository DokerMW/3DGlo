const preloader = (mainClass, activeClass) => {
	const preloader = document.querySelector(`.${mainClass}`);

	if(activeClass){
		preloader.classList.add(`${activeClass}`);
	} else {
		preloader.classList.remove('.active');
	}

};

export default preloader
