import preloader from "./preloader";

const sendForm = ({formId, someElement = []}) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div')
	const loader = document.querySelector(`.loader`);

	// const loadText = 'Загрузка...'
	// const errorText = 'Ошибка!'
	// const successText = 'Успешно!'


	const validate = (list) => {
		let success = true;

		
		return success
	}

	const sendData = (data) => {
		return fetch('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json'
			}
		})
		.then(res => res.json())
	}

	const submitForm = () => {
		const formElements = form.querySelectorAll('input')
		const formData = new FormData(form)
		const formBody = {}

		preloader('preloader', 'active')

		formData.forEach((key, val) => {
			formBody[key] = val
		})

		someElement.forEach(e => {
			const element = document.getElementById(e.id)
			if(e.type === 'block'){
				formBody[e.id] = element.textContent
			} 
			if(e.type === 'input'){
				formBody[e.id] = element.value
			}
		})

		if(validate(formElements)){
			sendData(formBody)
			.then(data => {
				loader.classList.add('success')
				setTimeout(() => {
					document.querySelector('.preloader').classList.remove('active')
				},1000)
				
				formElements.forEach(input => {
					input.value = ''
				})
			})
			.catch(error => {
				loader.classList.add('error')
				setTimeout(() => {
					document.querySelector('.preloader').classList.remove('active')
				},1000)
			})
		} else {
			alert('Данные не валидны!')
		}
		
	}

	try {
		if(!form){
			throw new Error('Ошибка! Нет формы')
		}
		form.addEventListener('submit', e => {
			e.preventDefault();
			submitForm()
		})

	} catch (error){
		console.log(error.message);
		
	}

	
}

export default sendForm