const config1 = [["(", ")"]];
const config2 = [
  ["(", ")"],
  ["[", "]"],
];
const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
  ["(", ")"],
  ["|", "|"],
];
const config6 = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "7"],
  ["8", "8"],
];
const config7 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
];

const str = "|()|";

module.exports = function check(str, config) {
  let len = config.length;
  // console.log(len);
  // console.log(config[0][0]);
  // console.log(config[0][1]);
  let arr = [];
  let flag = true;
  for (let i = 0; str.length > i; i++) {
    // console.log(str[i]);
    for (let j = 0; len > j; j++) {
      if (config[j][0] === str[i]) {
        arr.push(str[i]);
        if (config[j][0] === config[j][1]) {
          flag = false;
        }
      } else if (config[j][1] === str[i] & !flag) {
        let temp = arr.pop();
        if (config[j][0] === config[j][1]) {
          flag = true;
        }
        console.log(arr);
        if (temp !== config[j][0]) {
          console.log(temp);
          console.log(config[j][0]);
          return false;
        }
      }
    }
  }
  if (arr[0] !== undefined) {
    // console.log(arr);
    return false;
  }
  // console.log(arr[0]);

  return true;
};

console.log(module.exports(str, config5));
