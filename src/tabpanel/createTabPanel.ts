import { ComposeFactory } from 'dojo-compose/compose';
import { Widget, WidgetOptions, WidgetState, DNode, HNode } from 'dojo-widgets/interfaces';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v, w } from 'dojo-widgets/d';
// import createTab, { TabOptions } from '../tab/createTab';
import * as css from './tabpanel.module.styl';

export interface TabPanelState extends WidgetState {}

export interface TabPanelOptions extends WidgetOptions<TabPanelState> {}

export type TabPanel = Widget<TabPanelState>;

export interface TabPanelFactory extends ComposeFactory<TabPanel, TabPanelOptions> {}

const createTabPanel: TabPanelFactory = createWidgetBase.mixin({
	mixin: {
		tagName: 'tab-panel',
		getChildrenNodes: function (this: TabPanel): DNode[] {
			return [
				v(`ul.${css.tabs}`, [
					v('li', [ 'tab1' ]),
					v('li', [ 'tab2' ]),
					v('li', [ 'tab3' ])
				]),
				v(`div.${css.panels}`, [
					v(`div.${css.panel}`, [ 'hello world' ])
				])
			];
		}
	}
});

export default createTabPanel;
