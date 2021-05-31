function add(x, y) {
  return x + y;
}
// 下一行eslint所有规则都失效（下一行不尽兴eslint检查）
// eslint-disable-next-line
console.log((add(2, 5)));
