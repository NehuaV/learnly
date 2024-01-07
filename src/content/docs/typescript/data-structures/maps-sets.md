---
title: Map and Set in JavaScript
description: Map and Set are two new data structures introduced in ES6. Map is an enhanced version of Object for storing key-value pairs, while Set is a collection for storing unique values.
sidebar:
  order: 1
---

JavaScript provides various ways to store collections of data. Up to now, we've explored objects and arrays:

- Objects are used for storing keyed collections, with keys as strings.
- Arrays are used for storing ordered collections, with numeric indices.

However, these structures have limitations for certain use cases. That's where `Map` and `Set` come into play, introduced in ES6.

## Map

A [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a collection of keyed data items, much like an Object. But the main difference is that Map allows keys of any type, not just strings or symbols.

### Key Features and Methods:

- [`new Map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map): Creates a new Map.
- [`map.set(key, value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set): Stores the value by the key.
- [`map.get(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get): Returns the value by the key, `undefined` if the key doesn't exist in Map.
- [`map.has(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has): Checks whether the key exists in Map.
- [`map.delete(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete): Removes the element by the key.
- [`map.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear): Clears the Map.
- [`map.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size): Returns the number of elements in Map.

Unlike objects, Map keys can be of any type, including objects, functions, or any primitive.

### Example:

```javascript
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'
alert(map.size); // 3
```

### Map vs. Object:

- Maps can have keys of any type.
- Maps remember the original insertion order of the keys.
- Maps have better performance for large quantities of elements.

### Iteration over Map:

You can iterate through a Map using methods like `map.keys()`, `map.values()`, and `map.entries()`. Maps maintain the insertion order of their elements.

## Set

A [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is a collection of unique values. Each value can only occur once in a Set.

### Key Features and Methods:

- [`new Set([iterable])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set): Creates a new Set. You can optionally pass an array (or any iterable) to initialize it.
- [`set.add(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add): Adds a value to the Set.
- [`set.delete(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete): Deletes a value from the Set.
- [`set.has(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has): Checks whether a value is in the Set.
- [`set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear): Clears the Set.
- [`set.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size): Returns the number of elements in Set.

### Example:

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };

set.add(john);
set.add(pete);
set.add(john); // John is added only once

alert(set.size); // 2

for (let user of set) {
  alert(user.name); // John, then Pete
}
```

### Set vs. Array:

- Sets automatically remove duplicates.
- Sets are optimized for adding, removing, and checking the presence

of elements.

### Iteration over Set:

Sets are iterable, and you can iterate through them using `set.keys()`, `set.values()`, `set.entries()`, or with a `for..of` loop. Despite Sets being unordered, they maintain the insertion order of their elements.

## Conversion Between Object and Map

You can convert a Map to an Object and vice versa:

- To convert a Map to an Object: Use `Object.fromEntries(map.entries())`.
- To convert an Object to a Map: Use `new Map(Object.entries(object))`.

## Summary

`Map` and `Set` are powerful additions to JavaScript, offering enhanced functionality and performance for specific use cases involving collections of data. While Objects and Arrays are versatile and cover most needs, Maps and Sets provide additional flexibility, efficiency, and readability for managing collections.
