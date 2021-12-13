// import React from 'react';
// import ReactDom from 'react-dom';
// import { a } from './app.js';
import './index.css'

// import './customComp';

const root = document.getElementById('root');
const shadow = root.attachShadow({mode: 'open'})
const div = document.createElement('div');

const customComp = document.createElement("popup-info")
customComp.setAttribute('img', '//www.baidu.com/img/flexible/logo/pc/result.png');
customComp.setAttribute('text', 'Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card.[name]');

shadow.appendChild(customComp);
console.log(document.getElementById('element-details-template').content);
