const slider = (sliderContainer,slideItem,activeSlide,dotContainer, dotsClass, dotsActiveClass,sliderBtns,arrowLeftId,arrowRightId) =>{
	const sliderBlock = document.querySelector(`.${sliderContainer}`);
	const slides = document.querySelectorAll(`.${slideItem}`);
	const dotsContainer = document.querySelector(`.${dotContainer}`);
	const timeInterval = 2000;
	
	let currentSlide = 0;
	let dots;
	let interval;

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	}
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	}

	const createDots = () => {
		let count = 0;
		
		while(count < slides.length){
			dotsContainer.insertAdjacentHTML('beforeend', `<li class="${dotsClass}"></li>`);
			count++
		}
		dots = document.querySelectorAll(`.${dotsClass}`);
	}

	const autoSlide = () => {
		prevSlide(slides, currentSlide, `${activeSlide}`)
		prevSlide(dots, currentSlide, `${dotsActiveClass}`)
		currentSlide++
		if(currentSlide >= slides.length){
			currentSlide = 0
		}
		nextSlide(slides, currentSlide, `${activeSlide}`)
		nextSlide(dots, currentSlide, `${dotsActiveClass}`)
	}

	const startSlide = (timer = 2000) => {
		interval = setInterval(autoSlide, timer)
	}

	const stopSlide = () => {
		clearInterval(interval)
	}

	sliderBlock.addEventListener('click', e => {
		e.preventDefault();

		if(!e.target.matches(`.${dotsClass}, .${sliderBtns}`)){
			return
		}
	
		prevSlide(slides, currentSlide, `${activeSlide}`)
		prevSlide(dots, currentSlide, `${dotsActiveClass}`)
		if(e.target.matches(`#${arrowRightId}`)){
			currentSlide++
		}
		if(e.target.matches(`#${arrowLeftId}`)){
			currentSlide--
		}
		if(e.target.classList.contains(`${dotsClass}`)){
			dots.forEach((dot, index) => {
				if(e.target === dot){
					currentSlide = index
				}
			})
		}
		if(currentSlide >= slides.length){
			currentSlide = 0
		}
		if(currentSlide < 0){
			currentSlide = slides.length - 1
		}
		nextSlide(slides, currentSlide, `${activeSlide}`)
		nextSlide(dots, currentSlide, `${dotsActiveClass}`)
	})

	sliderBlock.addEventListener('mouseenter', e => {
		if(e.target.matches(`.${dotsClass}, .${sliderBtns}`)){
			stopSlide();
		}
	}, true)
	sliderBlock.addEventListener('mouseleave', e => {
		if(e.target.matches(`.${dotsClass}, .${sliderBtns}`)){
			startSlide(timeInterval);
		}
	}, true)

	createDots()
	startSlide(timeInterval)

}

export default slider