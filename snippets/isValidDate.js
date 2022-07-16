/**
 * @description 주어진 매개변수가 유효한 date인지 확인합니다.
 * @param  {...any} val
 * @returns {boolean}
 */
export const isValidDate = (...val) =>
  !Number.isNaN(new Date(...val).valueOf());
