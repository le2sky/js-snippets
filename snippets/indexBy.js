/**
 * @description keying-function에 의해 결정된 값으로 리스트의 각 요소를 인덱싱한다.
 * @param {Function} fn
 * @param {Array} list
 * @returns {Object}
 */
export const indexBy = (fn, list) =>
  list.reduce(
    (prev, next) => ({
      ...prev,
      [fn(next)]: next,
    }),
    {}
  );
