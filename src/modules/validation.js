const validation = () => {
	const allInputs = document.querySelectorAll('input');
	const forms = document.querySelectorAll('form[id^="form"]');
	const testEmail = /[a-zA-Z0-9\-\.\!\~\*\']+@[a-zA-Z]+\.[a-zA-Z]+/g;
	
	allInputs.forEach(e => {
		e.addEventListener('blur', event => {
			event.target.value = event.target.value.replace(/[\s]{2,}/, " ")
			event.target.value = event.target.value.replace(/\-{2,}/, "-").trim()
			if(e.classList.contains('calc-item')){
				event.target.value = event.target.value.replace(/\D+/, "")
			} 
			if(e.getAttribute('type') === 'text' && !e.classList.contains('calc-item')) {
				try{
					event.target.value = event.target.value.replace(/[^а-яА-Я\-\s]/g, "")
					event.target.value = event.target.value.split(' ').map(el => el[0].toUpperCase() + el.substr(1).toLowerCase()).join(' ');
				} catch(error) {
					console.log(error.message);
				}
			} 
			if(e.classList.contains('mess') && !e.classList.contains('calc-item')) {
				try{
					event.target.value = event.target.value.replace(/[^а-яА-Я\-\s\.\,\!\?]/g, "")
					event.target.value = event.target.value.split(' ').map(el => el[0].toUpperCase() + el.substr(1).toLowerCase()).join(' ');
				} catch(error) {
					console.log(error.message);
				}
			} 
			if (e.getAttribute('type') === 'email'){
				event.target.value = event.target.value.replace(/[^a-zA-Z0-9\-\.\!\~\*\'\@]+/g, "")
			} 
			if (e.getAttribute('type') === 'tel'){
				event.target.value = event.target.value.replace(/[^\d\(\)\-\+]+/, "")
			}
		})
	})

	forms.forEach(e => {
		e.addEventListener('submit', event => {
			let inputEmail = event.target.querySelector('input[type="email"]');
			if(testEmail.test(inputEmail.value)){
				console.log('Данные отправлены');
			} else{
				event.preventDefault();
				alert('Не правильно введен email')
			}
		});
	})
}
export default validation;