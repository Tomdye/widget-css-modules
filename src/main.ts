/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
import themeManager from 'dojo-widgets/themeManager';
import createTabPanel from 'dojo-widgets/components/tabpanel/createTabPanel';
import createButton from 'dojo-widgets/components/button/createButton';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';
import createMyWidget from './createMyWidget';
import createStore from 'dojo-stores/store/createStore';
import createObservableStoreMixin from 'dojo-stores/store/mixins/createObservableStoreMixin';

import * as noir from './themes/noir/theme.module.styl';
import * as appCss from './app.module.styl';

// themeManager.theme = noir;

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
	v('h2', ['Vanilla Widget CSS']),
	w(createTabPanel, {}),
	w(createButton, { properties: { label: 'Hello World', classes: [ appCss.myWideButton ] }}),
	w(createTabPanel, { properties: { classes: [ appCss.myTabPanel ]}})
	// v(`section.${noir.theme}`, [
	// 	v('h2', ['Noir Theme']),
	// 	w(createTabPanel, {})
	// ]),
	// v(`section.${aqua.theme}`, [
	// 	v('h2', ['Aqua Theme']),
	// 	w(createTabPanel, {})
	// ])
];
projector.append();