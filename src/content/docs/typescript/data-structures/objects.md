---
title: Objects
sidebar:
  order: 2
---

While JavaScript's `Map`, `Set`, and `Array` structures have built-in methods for iteration, plain objects require a slightly different approach. However, JavaScript provides methods for iterating over and transforming plain objects as well.

## Object.keys, values, entries

For plain objects, JavaScript offers the following methods:

- [`Object.keys(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys): Returns an array of the object's property names (keys).
- [`Object.values(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values): Returns an array of the object's property values.
- [`Object.entries(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries): Returns an array of key-value pairs.

These methods are somewhat similar to those available for `Map`, `Set`, and `Array`. However, there are key differences:

- The syntax is `Object.keys(obj)`, not `obj.keys()`. This design provides more flexibility, as objects can have their own methods.
- These methods return actual arrays, not just iterable objects. This is primarily due to historical reasons.

### Example Usage

Given an object:

```javascript
let user = {
  name: "John",
  age: 30,
};
```

You can use these methods as follows:

- `Object.keys(user)` returns `["name", "age"]`.
- `Object.values(user)` returns `["John", 30]`.
- `Object.entries(user)` returns `[["name", "John"], ["age", 30]]`.

Here's how you might use `Object.values` to iterate over values:

```javascript
for (let value of Object.values(user)) {
  alert(value); // "John", then 30
}
```

### Note on Symbolic Properties

`Object.keys`, `values`, and `entries` ignore properties with symbolic keys. If you need symbolic properties as well, use [`Object.getOwnPropertySymbols(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) or [`Reflect.ownKeys(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys).

## Transforming Objects

Objects don't have many array methods like `map`, `filter`, etc. If you need to perform such transformations, you can convert the object to an array, apply the transformation, and then convert it back. Here's how you can do this:

1. Use `Object.entries(obj)` to get an array of key/value pairs.
2. Apply array transformation methods (`map`, `filter`, etc.).
3. Convert the transformed array back into an object using `Object.fromEntries`.

For example, if you want to double the prices in an object:

```javascript
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

In this example, `Object.entries(prices)` converts the `prices` object into an array of key-value pairs. The `map` method then doubles each value, and `Object.fromEntries` transforms the array back into an object.

These transformations allow for powerful and flexible manipulation of objects in JavaScript.
