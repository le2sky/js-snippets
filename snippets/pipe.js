/**
 * @description 왼쪽에서 오른쪽으로 함수 합성을 수행한다.
 * @param {Array<Function>} functions
 * @param  {...any} args
 * @returns {any}
 */

export const pipe = (functions, ...args) =>
  functions.reduce(
    (prev, next) => (Array.isArray(prev) ? next(...prev) : next(prev)),
    args
  );
