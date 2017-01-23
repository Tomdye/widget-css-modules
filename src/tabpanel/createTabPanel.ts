import { ComposeFactory } from 'dojo-compose/compose';
import { Widget, WidgetOptions, WidgetProperties, WidgetState, DNode } from 'dojo-widgets/interfaces';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v } from 'dojo-widgets/d';
import themeable, { Themeable } from 'dojo-widgets/mixins/themeable';
import * as css from './styles/tabpanel.css';

export interface TabPanelState extends WidgetState {}

export type TabPanel = Widget<WidgetProperties> & Themeable<typeof css>;

export interface TabPanelFactory extends ComposeFactory<TabPanel, WidgetProperties> {}

const createTabPanel: TabPanelFactory = createWidgetBase.mixin(themeable).mixin({
	mixin: {
		tagName: 'tab-panel',
		classes: [ 'css.tabPanel' ],
		baseTheme: css,
		getChildrenNodes: function (this: TabPanel): DNode[] {
			return [
				v(`ul`, { classes: this.theme.tabPanelTabs }, [
					v('li', { classes: this.theme.tabPanelTab }, [ 'tab1' ]),
					v('li', { classes: { ...this.theme.tabPanelTab, ...this.theme.tabPanelActiveTab } }, [ 'tab2' ]),
					v('li', { classes: this.theme.tabPanelTab }, [ 'tab3' ])
				]),
				v('div', { classes: this.theme.tabPanelPanels }, [
					v('div', { classes: this.theme.tabPanelPanel }, [ 'hello world' ])
				])
			];
		}
	}
});

export default createTabPanel;
