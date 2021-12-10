
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('l') + 'px;' +
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}

class PopUpInfo extends HTMLElement {
  static get observedAttributes() {return ['img']; }
  constructor() {
    // 必须首先调用 super方法
    super();
  }
  connectedCallback() {
    // 元素的具体功能写在下面
    var shadow = this.attachShadow({mode: 'open'});
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');
    var icon = document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('tabindex', 0);
    var info = document.createElement('span');
    info.setAttribute('class','info');

    // 获取属性的内容并将内容添加到 info 元素内
    var text = this.getAttribute('text');
    info.textContent = text;

    // 插入 icon
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);
    var style = document.createElement('style');

    style.textContent = `
    .wrapper {
      position: relative;
    }

    .info {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid black;
      padding: 10px;
      background: white;
      border-radius: 10px;
      opacity: 0;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
    }

    img {
      width: 1.2rem;
    }

    .icon:hover + .info, .icon:focus + .info {
      opacity: 1;
    }`;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    updateStyle(this);
  }
  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }
  
  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }
}

customElements.define('popup-info', PopUpInfo);