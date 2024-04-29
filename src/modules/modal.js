import { animate } from "./helpers";

const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const windowInnerWidth = window.innerWidth;

	buttons.forEach(e => {
		e.addEventListener('click', ()=>{
			if(windowInnerWidth > 768){
				modal.style.display = 'block';
				animate({
					duration: 200,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress){
						modal.style.opacity = progress
					}
				})
			} else {
				modal.style.display = 'block';
			}
		})
	})

	modal.addEventListener('click', e=>{
		if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
				modal.style.display = 'none';
		}
	})
}

export default modal;