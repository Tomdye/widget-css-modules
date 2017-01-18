/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
import createTabPanel from './tabpanel/createTabPanel';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';

// import * as dark from './themes/dark/theme.css';
// import * as tabPanelOverrides from './styles/tabPanelOverrides.css';
// import * as dojoCommon from 'dojo-widgets/styles/common';
// import * as appCss from './styles/app.css';

const projector = createProjector({
	root: document.body
});

projector.children = [
	v('h1', ['Dojo 2 Demo']),
	w(createTabPanel, {}),
	// w(createButton, { properties: { label: 'Hello World' } }),
	// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
];
projector.append();

// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ dojoCommon.pullRight ] } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ appCss.myButton ] } }),
