const _ = require("lodash");

function keysToCamel(o: any): any {
  if (Array.isArray(o)) {
    return o.map((v) =>
      v !== null && v.constructor === Object ? keysToCamel(v) : v
    );
  } else if (o !== null && o.constructor === Object) {
    return Object.keys(o).reduce(
      (result, key) => ({
        ...result,
        [_.camelCase(key)]: o[key], // 자식 객체에 대해서는 재귀적으로 호출하지 않음
      }),
      {}
    );
  }
  return o;
}

function keysToSnake(o: any): any {
  if (Array.isArray(o)) {
    return o.map((v) =>
      v !== null && v.constructor === Object ? keysToSnake(v) : v
    );
  } else if (o !== null && o.constructor === Object) {
    return Object.keys(o).reduce(
      (result, key) => ({
        ...result,
        [_.snakeCase(key)]: o[key], // 자식 객체에 대해서는 재귀적으로 호출하지 않음
      }),
      {}
    );
  }
  return o;
}
