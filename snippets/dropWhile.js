/**
 * @description 첫 번째 요소에서부터 시작하여 조건 함수가 충족될 때까지 목록에서 요소를 삭제한다.
 * @param {Function} pred
 * @param {Array} list
 * @returns {Array}
 */
export const dropWhile = (pred, list) => {
  let index = 0;
  list.every((elem) => {
    index++;
    return pred(elem);
  });
  return list.slice(index - 1);
};
