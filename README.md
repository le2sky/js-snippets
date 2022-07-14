# twenty-useful-js-snippets

Small solutions to single well-defined problems.

## Reference

This is the repository to store the code based on the article written by @henrik1

- Henrik Larsen Toft's
  [20 JavaScript snippets that will make you a better developer](https://levelup.gitconnected.com/20-javascript-snippets-that-will-make-you-a-better-developer-68dfe4bf5019)

## Snippets usage

#### Get Value

함수는 지정된 경로의 값을 반환하고, 값이 없으면 null을 반환합니다.

```js
getValue({ a: { b: { c: "d" } } }, "a.b.c"); // = d
```

| Function   | Parameter                     | Description                           |
| :--------- | :---------------------------- | :------------------------------------ |
| `getValue` | obj: `object`, path: `string` | if, vaild path return value else null |

#### clamp

값이 지정된 범위 내에 있는지 확인하고, 지정된 범위에 값이 없다면 최소값과 최대값에 가장 가까운 값을 반환(클램프)합니다.

```js
clamp(0, 10, -5); // = 0
```

| Function | Parameter                                    | Description                    |
| :------- | :------------------------------------------- | :----------------------------- |
| `clamp`  | min: `number`, max: `number`, value:`number` | value or clamp value(min, max) |
