import store from './store/index';
import App from './app/index';
import './index.scss';

const appStore = store();

const app = new App(appStore);

const block = document.createElement('div');

document.body.prepend(block);
