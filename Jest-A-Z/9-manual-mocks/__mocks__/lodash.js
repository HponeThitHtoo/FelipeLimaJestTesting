/* module.exports = {
  repeat() {
    return "BBB";
  },
}; */

/* 
const lodash = jest.createMockFromModule("lodash");

lodash.repeat = (strr, count) => {
  return "BBB";
};

lodash.upperCase = (strr) => {
  return "BBB";
};

lodash.head = (arr) => 2;

module.exports = lodash;
 */

const lodash = jest.requireActual("lodash");

lodash.repeat = () => {
  return "BBB";
};

module.exports = lodash;
