const greetingsSpan = document.querySelector('.greetings');
const daySpan = document.querySelector('.day');
const timeSpan = document.querySelector('.time');
const newYearSpan = document.querySelector('.new-year');

const currentHour = new Date().getHours();
const fullDate = new Date();
const dayOfWeek = fullDate.getDay();

const week = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота'
 ];

const getGreetingsMsg = () =>{
	if(currentHour >= 0 && currentHour < 6){
		greetingsSpan.textContent = 'Доброй ночи'
	} else if(currentHour >= 6 && currentHour < 12){
		greetingsSpan.textContent = 'Доброе утро'
	} else if(currentHour >= 12 && currentHour < 18){
		greetingsSpan.textContent = 'Добрый день'
	} else if(currentHour >= 18 && currentHour < 23){
		greetingsSpan.textContent = 'добрый вечер'
	}
}

const changeEnding = (digit, endingOne, endingTwo, endingThree) =>{
	let lastDigit = digit % 10;
	if(lastDigit == 1){
		return endingOne;
	} else if (digit == 11 || digit == 12 || digit == 13 || digit == 14) {
		return endingThree;
	} else if (lastDigit == 2 || lastDigit == 3 || lastDigit == 4){
		return endingTwo;
	} else{
		return endingThree;
	}
}

const updateClock = () =>{
	let dateStop = new Date('01.01.2025').getTime();
	let dateNow = new Date().getTime();
	let timeRemaining = (dateStop - dateNow) / 1000;
	let days = Math.floor(timeRemaining / 86400);

	getGreetingsMsg();
	timeSpan.textContent = new Date().toLocaleTimeString('en');
	daySpan.textContent = week[dayOfWeek];
	newYearSpan.textContent = `${days} ${changeEnding(days, 'день', 'дня', 'дней')}`;
}

setInterval(updateClock, 1000)


