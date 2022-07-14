/**
 * @description 다음 작업을 수행하기 전에 지정된 기간(밀리초)을 기다립니다.
 * @param {number} duration
 * @returns { Promise<void> }
 */
export const sleep = async (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));
