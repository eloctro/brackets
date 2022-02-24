module.exports = function check(str, config) {
  let len = config.length;
  let arr = [];
  for (let i = 0; str.length > i; i++) {
    for (let j = 0; len > j; j++) {
      if (
        (config[j][0] === str[i]) &
        !((config[j][0] === config[j][1]) & (arr[arr.length - 1] === str[i]))
      ) {
        arr.push(str[i]);
      } else if (config[j][1] === str[i]) {
        if (arr.pop() !== config[j][0]) {
          return false;
        }
      }
    }
  }
  if (arr[0] !== undefined) {
    return false;
  }
  return true;
};
