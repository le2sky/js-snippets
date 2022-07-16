/**
 * @description 주어진 리스트의 값을 두 개의 리스트으로 나눈다. 하나는 평가 함수가 참으로 평가되는 값을 포함하고 또 다른 리스트는 거짓인 값들을 포함한다.
 * @param {Function} predicate
 * @param {Array} list
 * @returns {Array<Array>}
 */
export const bifurcateBy = (predicate, list) =>
  list.reduce(
    (acc, val, i) => (acc[predicate(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );
