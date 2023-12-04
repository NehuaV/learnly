---
title: Numbers
description: Numbers, Specification and usage.
sidebar:
  order: 3
---

## Fundamentals of Number Variables in TypeScript

TypeScript, as a superset of JavaScript, supports all the data types present in JavaScript, including numbers. The number data type in TypeScript is a double-precision 64-bit binary format [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) value, inherited from JavaScript. This means that TypeScript does not differentiate between integers and floating-point numbers; both are represented as numbers.

## Usage

In TypeScript, you declare a number variable using either `let` or `const` keywords, followed by a colon and the `number` type annotation:

```typescript
let age: number = 30;
const pi: number = 3.14159;
```

This approach ensures type safety, a core feature of TypeScript, preventing unintended type assignments.

## Number Constructor

The `Number` constructor in TypeScript is used to create a number object. While number literals like `10` or `3.14` are of the type `number`, the `Number` constructor creates an object:

```typescript
let numObj = new Number(10);
```

However, using `Number` objects is less common in TypeScript due to the additional overhead compared to primitive number types.

## Higher Order Functions

TypeScript numbers can utilize several higher-order functions, inherited from JavaScript. These include:

1. **.toFixed()**: This method formats a number using fixed-point notation. It's particularly useful for rounding numbers to a specified number of decimal places.

   ```typescript
   let num: number = 5.12345;
   console.log(num.toFixed(2)); // Outputs "5.12"
   ```

2. **.toPrecision()**: This method returns a string representing the number to a specified precision.

3. **.toString()**: Converts the number to its string representation.

## Working with Number Arrays

TypeScript's number arrays can be manipulated using higher-order functions like `.map()`, `.filter()`, `.reduce()`, and others. These functions are pivotal for data processing.

1. **.map()**: Used to transform each element in an array.

   ```typescript
   let numbers = [1, 2, 3];
   let squaredNumbers = numbers.map((num) => num * num); // [1, 4, 9]
   ```

2. **.reduce()**: Reduces an array to a single value. It's commonly used for sums or products of arrays.

   ```typescript
   let sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 6
   ```

3. **.filter()**: Creates a new array with all elements that pass the test implemented by the provided function.

## Other Useful Aspects

- **NaN**: Stands for "Not-a-Number". It's a special value representing an unrepresentable or undefined numerical result.
- **Infinity**: Represents infinity, a value greater than any other number.
- **Type Assertions**: Sometimes, you may need to assert that a variable is indeed a number.

  ```typescript
  let unknownValue: any = "5";
  let numericValue: number = <number>(<unknown>unknownValue);
  ```

- **Enums**: TypeScript also supports numeric enums, where each member has a numeric value.
