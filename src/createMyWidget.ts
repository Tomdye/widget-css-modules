import { Widget, DNode, WidgetState, WidgetProperties } from 'dojo-widgets/interfaces';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import { v } from 'dojo-widgets/d';
import * as css from './styles/my-widget.module.styl';
// import * as defaultTheme from './themes/default/my-widget.module.styl';
// import { assign } from 'dojo-core/lang';

export type MyWidgetTheme = {
	root: string;
	strong: string;
}

export type MyWidgetState = WidgetState & {
	theme: MyWidgetTheme;
}
export type MyWidget = Widget<MyWidgetState, WidgetProperties>

const createMyWidget = createWidgetBase.override({
	getChildrenNodes(this: MyWidget): DNode[] {
		// const { theme:stateTheme = {} } = this.state;
		// const theme = assign(defaultTheme, stateTheme);

		return [
			v(`div.${css.root}`, [
				'Hello,',
				v(`span.${css.strong}`, [ 'Dojo' ]),
				'World!'
			])
		];
	}
});

export default createMyWidget;