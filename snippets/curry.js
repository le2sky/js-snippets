/**
 * @description 다중 인자를 가진 함수를 커링합니다.
 * @param {Function} func
 * @returns {CurriedFunction}
 */
export const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};
