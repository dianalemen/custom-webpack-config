import messages from './massage';
import './index.scss';

const paragraph = document.createElement('div');
paragraph.innerHTML = messages.message + messages.secondMessage;

document.body.prepend(paragraph);
