import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('06 may 2024');
menu('active-menu');
modal();
validation();
tabs();
slider(
			'portfolio-content',
			'portfolio-item',
			'portfolio-item-active',
			'portfolio-dots',
			'dot', 
			'dot-active',
			'portfolio-btn',
			'arrow-left',
			'arrow-right'
		);
calc();
sendForm({
	formId: 'form1',
	someElement: [
		{
			type: 'block',
			id: 'total'
		}
	]
	});
sendForm({formId: 'form2'});
sendForm({formId: 'form3'});
