import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties, DNode } from '@dojo/widget-core/interfaces';
import { ThemeableMixin, ThemeableProperties, theme } from '@dojo/widget-core/mixins/Themeable';
import { v } from '@dojo/widget-core/d';

import * as css from './styles/tabpanel.css';

export interface TabPanelProperties extends ThemeableProperties {}


const TabPanelBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class TabPanel extends TabPanelBase<TabPanelProperties> {
	render() {
		return v('div', { classes: this.classes(css.root).get() }, [
			v(`ul`, { classes: this.classes(css.tabs).get() }, [
				v('li', { classes: this.classes(css.tab).get() }, [ 'tab1' ]),
				v('li', { classes: this.classes(css.tab, css.activeTab).get() }, [ 'tab2' ]),
				v('li', { classes: this.classes(css.tab).get() }, [ 'tab3' ])
			]),
			v('div', { classes: this.classes(css.panels).get() }, [
				v('div', { classes: this.classes(css.panel).get() }, [ 'hello world' ])
			])
		]);
	}
};
