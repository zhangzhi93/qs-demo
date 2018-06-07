import Qs from 'qs';
import {
  getElementById,
  createElements
} from './utils';

let textarea = document.createElement('textarea');
textarea.setAttribute('id', 'before_value');
textarea.style.width = '250px';
textarea.style.height = '100px';
let button = document.createElement('button');
button.textContent = '转换';
button.setAttribute('id', 'btn_transform');
let showDiv = document.createElement('div');
showDiv.setAttribute('id', 'after_value');
document.body.appendChild(textarea);
document.body.appendChild(button);
document.body.appendChild(showDiv);
getElementById('btn_transform').onclick = function() {
  let textValue = getElementById('before_value').value;
  let textJson = JSON.parse(textValue || '{}');
  getElementById('after_value').innerHTML = Qs.stringify(textJson);
}

createElements('<div id="after_value">document</div>');


const obj = {
  name: 'janz',
  age: 26
}
console.log(Qs.stringify(obj));
