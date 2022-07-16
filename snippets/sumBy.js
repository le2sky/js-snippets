/**
 * @description 각 요소의 개별 값을 발행하는 함수가 주어지면 리스트에 있는 모든 요소의 합을 계산한다.
 * @param {Function} fn
 * @param {Array} list
 * @returns {number}
 */
export const sumBy = (fn, list) =>
  list.reduce((prev, next) => prev + fn(next) + 0);
