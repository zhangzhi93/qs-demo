import Qs from 'qs';
import {
  getElementById,
  createElements
} from './utils';
import './style.less';

const defaultObjStr = '{"a":1,"b":2}';

const container = createElements('<div class="container"></div>');
createElements('<h2>Qs 转换:</h2>', container);
const textarea = createElements('<textarea class="textarea" placeholder="请输入符合标准的json"></textarea>', container);
textarea.value = defaultObjStr;
const btnDiv = createElements('<div class="div-btn"></div>', container);
const button = createElements('<button>转换</button>', btnDiv);
const showDiv = createElements('<div class="div-show"></div>', container);


const URLcontainer = createElements('<div class="container"></div>');
createElements('<h2>URLSearchParams 转换:</h2>', URLcontainer);
const URLtextarea = createElements('<textarea class="textarea" placeholder="请输入符合标准的json"></textarea>', URLcontainer);
URLtextarea.value = defaultObjStr;
const URLbtnDiv = createElements('<div class="div-btn"></div>', URLcontainer);
const URLbutton = createElements('<button>转换</button>', URLbtnDiv);
const URLshowDiv = createElements('<div class="div-show"></div>', URLcontainer);

button.onclick = function () {
  const textValue = textarea.value;
  const textJson = JSON.parse(textValue || '{}');
  showDiv.innerHTML = Qs.stringify(textJson);
}

URLbutton.onclick = function () {
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
