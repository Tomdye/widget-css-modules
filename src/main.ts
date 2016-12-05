/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import d from 'dojo-widgets/d';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';
import createMyWidget from './createMyWidget';
import createStore from 'dojo-stores/store/createStore';
import createObservableStoreMixin from 'dojo-stores/store/mixins/createObservableStoreMixin';

import * as blueMyWidgetTheme from './themes/blue/my-widget.module.styl';
import * as greenMyWidgetTheme from './themes/green/my-widget.module.styl';

const createObservableStore = createStore.mixin(createObservableStoreMixin())
const widgetStore = createObservableStore({
	data: [
		{
			id: 'widget2',
			theme: blueMyWidgetTheme
		}
	]
});

const projector = createProjector({
	root: document.body
});

let blue = true;
function changeTheme() {
	let theme = blueMyWidgetTheme;
	if (blue) {
		theme = greenMyWidgetTheme;
	}
	blue = !blue;
	widgetStore.patch({id: 'widget2', theme });
}

projector.children = [
	d(createMyWidget, { id: 'widget1' }),
	d(createMyWidget, <WidgetOptions<WidgetState>> { id: 'widget2', stateFrom: widgetStore }),
	d('button', {
		'onclick': changeTheme
	}, [ 'Change theme' ])
];
projector.append();