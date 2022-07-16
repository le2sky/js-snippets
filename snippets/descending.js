/**
 * 평가 함수가 주어지면 내림차순으로 비교하는 함수를 반환한다.
 * @param {Function} fn
 * @returns {number}
 */
export const descending = (fn) => (a, b) => {
  const valA = fn(b);
  const valB = fn(a);
  return valA < valB ? -1 : valA > valB ? 1 : 0;
};
