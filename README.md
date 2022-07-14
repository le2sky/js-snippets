# twenty-useful-js-snippets

A brief description of what this project does and who it's for

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

| Function    | Parameter                     | Description                           |
| :---------- | :---------------------------- | :------------------------------------ |
| `Get value` | obj: `object`, path: `string` | if, vaild path return value else null |
