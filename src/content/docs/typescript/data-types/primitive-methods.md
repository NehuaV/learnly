---
title: Primitive Types and Methods in TypeScript
sidebar:
  order: 2
---

TypeScript, an extension of JavaScript, enhances the experience of working with both primitives (like strings and numbers) and objects. Before we delve into the methods applicable to these primitives, it's crucial to understand their underlying nature and behavior, especially since primitives are distinct from objects.

### Understanding Primitives vs. Objects

**Primitives:**

- Represent simple, singular values.
- JavaScript recognizes seven primitive types: `string`, `number`, `bigint`, `boolean`, `symbol`, `null`, and `undefined`.

**Objects:**

- Capable of holding multiple values as properties.
- Created using `{}`, e.g., `{name: "John", age: 30}`. Functions in JavaScript are also objects.

An advantage of objects is their ability to store functions as properties, adding versatility.

#### Example in TypeScript:

```typescript
let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};

john.sayHi(); // Outputs: Hi buddy!
```

This example demonstrates an object `john` with a method `sayHi`. JavaScript is replete with built-in objects for various purposes, like date manipulation, error handling, and interacting with HTML elements, each with unique properties and methods.

### The Cost of Objects

While objects are versatile, they are "heavier" and more resource-intensive than primitives. This complexity is due to their additional internal mechanisms.

## Primitives as Objects: The JavaScript Paradox

JavaScript's creators faced a dilemma:

- How to enable primitive types like strings or numbers to utilize methods without compromising their lightweight and efficient nature?

The solution was ingenious but slightly complex:

1. Primitives retain their singular value nature.
2. JavaScript allows access to methods and properties typically associated with objects.
3. This is enabled through a temporary "object wrapper" that provides this functionality and is then discarded.

Each primitive type has its own "object wrapper": `String`, `Number`, `Boolean`, `Symbol`, and `BigInt`, offering various methods.

For example, strings have a method [str.toUpperCase()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) which returns a capitalized version of `str`.

### How it works:

```typescript
let str = "Hello";

alert(str.toUpperCase()); // HELLO
```

This operation might seem straightforward, but here's the process behind `str.toUpperCase()`:

1. The string `str` is a primitive. When accessing a property, a special object is temporarily created with the string value and relevant methods like `toUpperCase()`.
2. The method is executed, returning a new string.
3. The temporary object is destroyed, leaving the primitive `str` unaffected.

Thus, primitives can utilize methods while maintaining their simplicity and efficiency.

JavaScript engines optimize this process significantly, sometimes bypassing the creation of the temporary object altogether, yet adhering to the specification as if it were created.

Numbers, too, have their own methods, like [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) for precision rounding:

```typescript
let n = 1.23456;

alert(n.toFixed(2)); // 1.23
```

> **Caution:**
> Use `String`, `Number`, `Boolean` for internal purposes only. Unlike some languages (e.g., Java), JavaScript allows the creation of "wrapper objects" for primitives (`new Number(1)`, `new Boolean(false)`), but this is strongly discouraged. It can lead to unexpected behavior and type inconsistencies.
>
> For example:
>
> ```typescript
> alert(typeof 0); // "number"
>
> alert(typeof new Number(0)); // "object"!
> ```
>
> Objects are always truthy in JavaScript, leading to potentially misleading results:
>
> ```typescript
> let zero = new Number(0);
>
> if (zero) {
>   // zero is truthy because it's an object
>   alert("zero is truthy!?!");
> }
> ```
>
> However, using these functions without `new` is fine and often useful for type conversion:
>
> ```typescript
> let num = Number("123"); // Converts a string to a number
> ```

> **Special Note on `null` and `undefined`:**
> These two primitives are unique in that they have no "wrapper objects" and offer no methods. Attempting to access a property of `null` or `undefined` results in an error.
>
> ```typescript
> alert(null.test); // Throws an error
> ```

## Summary

- Primitives, except for `null` and `undefined`, provide many helpful methods.
- Formally, these methods operate via temporary objects, but this process is highly optimized by JavaScript engines, ensuring efficiency.
- In the upcoming chapters, we'll

explore these methods in more detail.
