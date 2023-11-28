---
title: First Draft
description: The basics of Typescript
sidebar:
  order: 1
---

TypeScript is a powerful language developed by Microsoft for building complex applications. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds static typing to JavaScript, making the code more robust and maintainable, particularly in large applications. This chapter introduces you to the basics of TypeScript, including its types, variables, and syntax.

## TypeScript and JavaScript

TypeScript builds on the strengths of JavaScript but introduces additional features, such as static typing, interfaces, and classes. These features make TypeScript an ideal choice for developing large-scale applications where maintainability and scalability are key concerns.

## Basic Types in TypeScript

TypeScript supports all the fundamental types present in JavaScript, such as `number`, `string`, `boolean`, and `Array`. It also introduces additional types like `tuple`, `enum`, and `any`.

- `number`: For numeric values.
- `string`: For textual data.
- `boolean`: For true/false values.
- `Array<Type>`: For array types, e.g., `Array<number>` for an array of numbers.
- `tuple`: For fixed-length and mixed-type arrays.
- `enum`: For enumerating a set of named constants.

## Variables: `let` and `const`

Similar to modern JavaScript, TypeScript uses `let` and `const` for variable declarations. Use `let` for variables whose values will change and `const` for variables whose values will remain constant.

```typescript
const maximumLoginAttempts: number = 10;
let currentLoginAttempt: number = 0;
```

## Type Annotations

TypeScript allows you to explicitly specify the type of variables using type annotations. This is particularly useful for enhancing code readability and reliability.

```typescript
let welcomeMessage: string;
welcomeMessage = "Hello, TypeScript!";
```

## Type Inference

TypeScript is intelligent in inferring types based on initial values, reducing the need for explicit type annotations in many cases.

```typescript
let isCompleted = false; // TypeScript infers boolean type
```

## Naming Rules

TypeScript variable names can include letters, numbers, and underscores, but they cannot start with a number. They are case-sensitive and cannot be reserved keywords. Unique and descriptive names are encouraged for readability.

## Constants and Variables: A Comparison

Constants (`const`) are used for values that are not intended to change, while variables (`let`) are used for values that can change over time. Choosing the right one depends on the specific use case in your code.

## Printing and Concatenation

TypeScript uses template literals, similar to modern JavaScript, for string interpolation.

```typescript
console.log(`Current attempt: ${currentLoginAttempt}`);
```

## Comments

TypeScript supports single-line (`//`) and multi-line (`/* ... */`) comments for adding descriptive text to your code.

## Semicolons

While optional in TypeScript (as in JavaScript), semicolons can be used to clearly separate statements, especially when multiple statements are on the same line.

## Integers and Floating-Point Numbers

TypeScript does not differentiate between integers and floating-point numbers; both are represented as `number`.

## Conclusion

TypeScript enhances JavaScript by adding types and other powerful features, making it suitable for developing complex applications. This chapter covered the basics, laying the foundation for more advanced topics in subsequent chapters.
