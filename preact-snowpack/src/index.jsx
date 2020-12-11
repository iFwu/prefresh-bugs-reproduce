import { render, h } from 'preact';
import App from './App';

window.h = h;

let root = document.querySelector('#root');
document.body.appendChild(root);
render(<App />, root);
