/* Put your code here */
import createProjector from 'dojo-widgets/createProjector';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
import themeManager from 'dojo-widgets/themeManager';
import createTabPanel from 'dojo-widgets/components/tabpanel/createTabPanel';
import createButton from 'dojo-widgets/components/button/createButton';
import { Projector } from 'maquette';
import { DNode, Widget, WidgetState, WidgetOptions } from 'dojo-widgets/interfaces';

import * as dojoCommon from 'dojo-widgets/styles/common.module.styl';
import * as noir from './themes/noir/theme.module.styl';
import * as tabPanelOverrides from './styles/tabPanelOverrides.module.styl';

themeManager.theme = noir;

const projector = createProjector({
	root: document.body
});

projector.children = [
	v('h2', ['Theme Manager']),
	w(createTabPanel, { properties: { overrideClasses: tabPanelOverrides } }),
	w(createButton, { properties: { label: 'Hello World' }}),
	v(`h2.${dojoCommon.pullRight}`, ['im on the right'])
];
projector.append();
