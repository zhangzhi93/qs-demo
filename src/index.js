import Qs from 'qs';
import {
  getElementById,
  createElements
} from './utils';
import './style.less';

let container = createElements('<div class="container"></div>');
createElements('<h2>Qs 转换:</h2>', container);
let textarea = createElements('<textarea class="textarea" placeholder="请输入符合标准的json"></textarea>', container);
textarea.value = '{"a":1,"b":2}';
let btnDiv = createElements('<div class="div-btn"></div>', container);
let button = createElements('<button>转换</button>', btnDiv);
let showDiv = createElements('<div class="div-show"></div>', container);


let URLcontainer = createElements('<div class="container"></div>');
createElements('<h2>URLSearchParams 转换:</h2>', URLcontainer);
let URLtextarea = createElements('<textarea class="textarea" placeholder="请输入符合标准的json"></textarea>', URLcontainer);
URLtextarea.value = '{"a":1,"b":2}';
let URLbtnDiv = createElements('<div class="div-btn"></div>', URLcontainer);
let URLbutton = createElements('<button>转换</button>', URLbtnDiv);
let URLshowDiv = createElements('<div class="div-show"></div>', URLcontainer);

button.onclick = function() {
  let textValue = textarea.value;
  let textJson = JSON.parse(textValue || '{}');
  showDiv.innerHTML = Qs.stringify(textJson);
}

URLbutton.onclick = function() {
  let URLtextValue = URLtextarea.value;
  let URLtextJson = JSON.parse(URLtextValue || '{}');
  let params = new URLSearchParams();
  for (let key in URLtextJson) {
    params.append(key, URLtextJson[key]);
  }
  URLshowDiv.innerHTML = params;
}

createElements('<div class="bottom">janz</div>');


const obj = {
  name: 'janz',
  age: 26
}
console.log(Qs.stringify(obj));
