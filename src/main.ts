/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import d from 'dojo-widgets/d';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';
import createMyWidget from './createMyWidget';
import createStore from 'dojo-stores/store/createStore';
import createObservableStoreMixin from 'dojo-stores/store/mixins/createObservableStoreMixin';
require('shady-css-parser');

import * as blueTheme from './themes/blue/theme.module.styl';
import * as greenTheme from './themes/green/theme.module.styl';
// import * as greenMyWidgetTheme from './themes/green/my-widget.module.styl';

const createObservableStore = createStore.mixin(createObservableStoreMixin())
const widgetStore = createObservableStore({
	data: [
		{
			id: 'widget2'
			// theme: blueMyWidgetTheme
		}
	]
});

const projector = createProjector({
	root: document.body
});

// let blue = true;
// function changeTheme() {
// 	let theme = blueMyWidgetTheme;
// 	if (blue) {
// 		theme = greenMyWidgetTheme;
// 	}
// 	blue = !blue;
// 	widgetStore.patch({id: 'widget2', theme });
// }

projector.children = [
	d(`div.${blueTheme.theme}`, [
		d(createMyWidget, { id: 'widget1' }),
		d(`div.${greenTheme.theme}`, [
			d(createMyWidget, { id: 'widget2' })
		])
	]),
	d(createMyWidget, { id: 'widget3', state: { classes: [ greenTheme.theme ] } }),

	// d('button', {
	// 	'onclick': changeTheme
	// }, [ 'Change theme' ])
];
projector.append();