const redCar = document.querySelector('.red_car');
const yellowCar = document.querySelector('.yellow_car');
const startBtn = document.querySelector('.start')
const btnSpan = document.querySelector('.btn-span');
const btnReset = document.querySelector('.reset');
const windowInnerWidth = window.innerWidth;
const pageWidth = document.documentElement.scrollWidth;


let active = false;
let count = 0;
let idInterval;

const driveAnimate = () =>{
	count++;
	idInterval = requestAnimationFrame(driveAnimate);
	console.log(count);
	
	if (count < 200){
		redCar.style.left = count * 10 + 'px';
		yellowCar.style.left = count * 10 + 'px';
	}else{
		count = -100;
		
	}

	
}

startBtn.addEventListener('click', ()=>{
	if(active){
		cancelAnimationFrame(idInterval);
		active = false
		btnSpan.textContent = 'Поехали!';
	}else{
		idInterval = requestAnimationFrame(driveAnimate)
		active = true
		btnSpan.textContent = 'Пауза';
	}
})

btnReset.addEventListener('click', ()=>{
	cancelAnimationFrame(idInterval);
	count = 0;
	redCar.style.left = count + 'px';
	yellowCar.style.left = count + 'px';
})

