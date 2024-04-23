const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const closeBtn = modal.querySelector('.popup-close');
	const windowInnerWidth = window.innerWidth;

	let count = 0;
	let idInterval;
	modal.style.opacity = 0

 	const smoothModal = () =>{
		count += 0.1;
		idInterval = requestAnimationFrame(smoothModal);
		
		if (count < 1){
			modal.style.opacity = count
		} else{
			cancelAnimationFrame(idInterval)
		}
	}

	buttons.forEach(e => {
		e.addEventListener('click', ()=>{
			if(windowInnerWidth > 768){
				modal.style.display = 'block';
				smoothModal()
			} else {
				modal.style.opacity = ''
				modal.style.display = 'block';
			}
		})
	})

	closeBtn.addEventListener('click', ()=>{
		if(windowInnerWidth > 768){
			modal.style.display = 'none';
	 		modal.style.opacity = 0;
			count = 0;
		} else {
			modal.style.display = 'none';
		}
	})

	
}

export default modal;