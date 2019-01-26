import message from './massage';
import './index.scss';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;

document.body.prepend(paragraph);
