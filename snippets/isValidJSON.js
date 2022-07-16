/**
 * @description 주어진 JSON 문자열이 참인지 거짓인지 판단합니다.
 * @param {string} str
 * @returns {boolean}
 */
export const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
