const validation = () => {
	const allInputs = document.querySelectorAll('input');
	const forms = document.querySelectorAll('form[id^="form"]');
	const testEmail = /[a-zA-Z0-9\-\.\!\~\*\']+@[a-zA-Z]+\.[a-zA-Z]+/;
	const testPhone = /^\+?[0-9][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
	
	
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
	let allInputs = document.querySelectorAll('input');		
		e.addEventListener('submit', event => {
			allInputs.forEach(e => {
				if(e.classList.contains('success')){
					e.classList.remove('success')
				}
			})
			let targetInputs = event.target.querySelectorAll('input');
			let inputEmail = event.target.querySelector('input[type="email"]');
			let inputTel = event.target.querySelector('input[type="tel"]');
			if(testEmail.test(inputEmail.value) && testPhone.test(inputTel.value)){
				targetInputs.forEach(e =>{
					e.classList.add('success')
				})
			} else{
				event.preventDefault();
			}
		});
	})
}
export default validation;