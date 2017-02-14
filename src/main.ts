/* Put your code here */
import {ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import TabPanel from './tabpanel/TabPanel';
// import createButton from '@dojo/widgets/button/createButton';
// import Dialog from '@dojo/widgets/dialog/Dialog';
import { Projector } from 'maquette';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';

class App extends WidgetBase<WidgetProperties> {
    render() {
       return w(TabPanel, {});
    }
}

const Projector = ProjectorMixin(App);
const projector = new Projector({});

projector.append(document.body);
