import {repeat} from 'lodash';

const visApp = {
  greet() {
    return 'hello';
  },
  repeat(what, count) {
    return _.repeat(what, count);
  },
  takeEvenAndMultiply(arr, by) {
    return _(arr).filter(i => i % 2 === 0).map(i => i * by).value();
  }
};

console.log(visApp.greet());
console.log(visApp.repeat('yo ', 4));
console.log(visApp.takeEvenAndMultiply([3, 4, 7, 12, 13, 17], 3));

export default visApp;
