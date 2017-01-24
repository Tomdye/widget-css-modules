/* Put your code here */
import createProjector from '@dojo/widget-core/createProjector';
import createWidgetBase from '@dojo/widget-core/createWidgetBase';
import { v, w } from '@dojo/widget-core/d';
import createTabPanel from './tabpanel/createTabPanel';
// import createButton from '@dojo/widgets/button/createButton';
import createButton from '@dojo/widgets/button/createButton';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetOptions } from '@dojo/widget-core/interfaces';

// import * as dark from './themes/dark/theme.css';
// import * as tabPanelOverrides from './styles/tabPanelOverrides.css';
// import * as dojoCommon from '@dojo/widget-core/styles/common';
// import * as appCss from './styles/app.css';

const projector = createProjector({
	root: document.body
});

projector.setChildren([
	v('h1', ['Dojo 2 Demo']),
	w(createTabPanel, {}),
	w(createButton, { label: 'hello world' })
	// w(createButton, { properties: { label: 'Hello World' } }),
	// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
]);
projector.append();

// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ dojoCommon.pullRight ] } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ appCss.myButton ] } }),
