/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
import themeManager, { Theme } from 'dojo-widgets/themeManager';
import createTabPanel from 'dojo-widgets/components/tabpanel/createTabPanel';
import createButton from 'dojo-widgets/components/button/createButton';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';

// import * as dojoCommon from 'dojo-widgets/styles/common';
// import * as appCss from './styles/app.css';
// import * as dark from './themes/dark/theme.css';
// import * as tabPanelOverrides from './styles/tabPanelOverrides.css';

// themeManager.theme = <any> dark;

const projector = createProjector({
	root: document.body
});

projector.children = [
	v('h2', ['Theme Manager']),
	w(createTabPanel, {}),
	w(createButton, { properties: { label: 'Hello World' } })
];
projector.append();

// w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ appCss.myButton ] } }),
// w(createButton, { properties: { label: 'Hello World', classes: [ dojoCommon.pullRight ] } })
