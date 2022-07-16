/**
 * @description  인덱스 내에서 주어진 조건을 만족하는 첫 번째 키를 반환한다.
 * @param {Function} predicate
 * @param {Object} index
 * @returns {any}
 */
export const findKey = (predicate, index) =>
  Object.keys(index).find((key) => predicate(index[key], key, index));
