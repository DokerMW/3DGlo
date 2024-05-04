const sendForm = ({formId, someElement = []}) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div')
	const loadText = 'Загрузка...'
	const errorText = 'Ошибка!'
	const successText = 'Успешно!'


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

		statusBlock.textContent = loadText;
		form.append(statusBlock)

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
				statusBlock.textContent = successText
				formElements.forEach(input => {
					input.value = ''
				})
			})
			.catch(error => {
				statusBlock.textContent = errorText
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