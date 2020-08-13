/**
 * 转换动态代码
 * @param {String} fn 内容
 */
function evil(fn) {
  let Fn = Function;
  return new Fn('return ' + fn)();
}

export {evil};