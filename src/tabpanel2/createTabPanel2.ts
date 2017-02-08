import { ComposeFactory } from '@dojo/compose/compose';
import { Widget, WidgetOptions, WidgetProperties, DNode } from '@dojo/widget-core/interfaces';
import createWidgetBase from '@dojo/widget-core/createWidgetBase';
import { v } from '@dojo/widget-core/d';
import themeable, { ThemeableMixin } from '@dojo/widget-core/mixins/themeable';
import * as baseClasses from './styles/tabpanel2.css';

export type TabPanel = Widget<WidgetProperties> & ThemeableMixin;

export interface TabPanelFactory extends ComposeFactory<TabPanel, WidgetProperties> {}

const createTabPanel: TabPanelFactory = createWidgetBase.mixin(themeable).mixin({
	mixin: {
		baseClasses,
		render: function (this: TabPanel) {
			return v('div', { classes: this.classes(baseClasses.root).get() }, [
					v(`ul`, { classes: this.classes(baseClasses.tabs).get() }, [
						v('li', { classes: this.classes(baseClasses.tab).get() }, [ 'tab1' ]),
						v('li', { classes: this.classes(baseClasses.tab, baseClasses.activeTab).get() }, [ 'tab2' ]),
						v('li', { classes: this.classes(baseClasses.tab).get() }, [ 'tab3' ])
					]),
					v('div', { classes: this.classes(baseClasses.panels).get() }, [
						v('div', { classes: this.classes(baseClasses.panel).get() }, [ 'hello world' ])
					])
				]);
		}
	}
});

export default createTabPanel;
