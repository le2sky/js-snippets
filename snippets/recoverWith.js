/**
 * @description 주어진 함수에서 오류가 발생하면 기본값을 반환한다.
 * @param {any} defaultValue
 * @param {Function} fn
 * @param  {...any} args
 * @returns {Promise<any>}
 */
export const recoverWith = async (defaultValue, fn, ...args) => {
  try {
    const result = await fn(...args);
    return result;
  } catch (_e) {
    return defaultValue;
  }
};
