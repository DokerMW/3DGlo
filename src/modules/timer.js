const timer = (deadLine)=>{
	const timerHours = document.getElementById('timer-hours')
	const timerMinutes = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')

	const getTimeRemaining = () => {
		let dateStop = new Date(deadLine).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let hours = Math.floor(timeRemaining / 3600);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);
	
		return {
			timeRemaining,
			hours,
			minutes,
			seconds,
		}
	}

	const updateClock = () =>{
		let getTime = getTimeRemaining();
		if(getTime.timeRemaining < 0){
			stopTimer();
			return;
		}
		timerHours.textContent = addZero(getTime.hours);
		timerMinutes.textContent = addZero(getTime.minutes);
		timerSeconds.textContent = addZero(getTime.seconds);
	}

	const clockInterval = setInterval(updateClock, 1000)

	const stopTimer = () => {
			clearInterval(clockInterval)
	}
	const addZero = (digit) => {
		if ((digit + '').length == 1){
			return digit = '0' + digit;
		}
		return digit
	}
}

export default timer