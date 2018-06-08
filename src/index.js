import Qs from 'qs';
import {
  getElementById,
  createElements
} from './utils';
import './style.less';

let container = createElements('<div class="container"></div>');
let textarea = createElements('<textarea id="before_value" class="textarea" placeholder="请输入标准的json"></textarea>', container);
let btnDiv = createElements('<div class="div-btn"></div>', container);
let button = createElements('<button id="btn_transform">转换</button>', btnDiv);
let showDiv = createElements('<div id="after_value" class="div-show"></div>', container);

getElementById('btn_transform').onclick = function() {
  let textValue = getElementById('before_value').value;
  let textJson = JSON.parse(textValue || '{}');
  getElementById('after_value').innerHTML = Qs.stringify(textJson);
}

createElements('<div class="bottom">janz</div>');


const obj = {
  name: 'janz',
  age: 26
}
console.log(Qs.stringify(obj));
