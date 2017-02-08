/* Put your code here */
import createProjector from '@dojo/widget-core/createProjector';
import createWidgetBase from '@dojo/widget-core/createWidgetBase';
import { v, w } from '@dojo/widget-core/d';
import createTabPanel from './tabpanel/createTabPanel';
import createTabPanel2 from './tabpanel2/createTabPanel2';
// import createButton from '@dojo/widgets/button/createButton';
import createDialog from '@dojo/widgets/components/dialog/createDialog';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetOptions } from '@dojo/widget-core/interfaces';

import * as buttonTheme from './themes/tomsTheme/button.css';
import * as tabpanelTheme from './themes/tomsTheme/tabpanel.css';

const theme = {
	button: buttonTheme,
	tabpanel: tabpanelTheme
}

// import * as tabPanelOverrides from './styles/tabPanelOverrides.css';
// import * as dojoCommon from '@dojo/widget-core/styles/common';
// import * as appCss from './styles/app.css';

const projector = createProjector({
	root: document.body
});

projector.setChildren([
	v('h1', ['Dojo 2 Demo']),
	w(createTabPanel, { }),
	w(createTabPanel2, { }),
	w(createDialog, { title: 'hello world', open: true })
	// w(createButton, { properties: { label: 'Hello World' } }),
	// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
]);
projector.append();

// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ dojoCommon.pullRight ] } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ appCss.myButton ] } }),
