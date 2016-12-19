/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
import createTabPanel from './tabpanel/createTabPanel';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';
import createMyWidget from './createMyWidget';
import createStore from 'dojo-stores/store/createStore';
import createObservableStoreMixin from 'dojo-stores/store/mixins/createObservableStoreMixin';

import * as theme from './themes/blue/theme.module.styl';

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


projector.children = [
	v('h1', ['HELLO THERE']),
	w(createTabPanel, {})
];
projector.append();