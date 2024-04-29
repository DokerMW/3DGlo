import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import tabs from './modules/tabs'
import slider from './modules/slider'

timer('06 may 2024');
menu('active-menu');
modal();
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