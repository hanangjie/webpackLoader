const a = {
  b: '[name]'
};
a.a = a;

// 模拟webpackloader同步异步原理
class A {
  constructor(list){
    this.list = list;
    this.index = 0;
    this.asyncState = false;
    this.data = 'a'
  }
  init = (data) => {
    const result = this.list[this.index].call(aClass, data);
    if(!this.asyncState) {
      this.index++;
      if(this.list[this.index]) {
        this.init(result);
      }
    }
  }
  async = () => {
    this.asyncState = true;
    this.index++;
    return (params) => {
      const result = this.list[this.index](params);
      this.asyncState = false
      this.index++;
      if(this.list[this.index]) {
        this.init(result);
      }
    }
  }
}

function c(data) {
  // console.log(2);
  var callback = this.async();
  setTimeout(() => {
    console.log(data);
    callback('c')
  }, 1000)
}

function d(data) {
  console.log(data);
  return 'd'
}
function e(data) {
  console.log(data);
  return 'e'
}

const list = [
  c, d, e
]

var aClass = new A(list);
aClass.init('a');

export { a } ;