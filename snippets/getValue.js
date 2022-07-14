/**
 * @description 함수는 지정된 경로의 값을 반환하고, 값이 없으면 null을 반환한다.
 * @return any | null
 *
 */
export const getValue = (obj, path) =>
  path
    .replace(/\[([^[\]]*)]/g, ".$1.")
    .split(".")
    .filter((prop) => prop !== "")
    .reduce(
      (prev, next) => (prev instanceof Object ? prev[next] : undefined),
      obj
    );
