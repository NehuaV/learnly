---
title: Data Types
description: In TypeScript, every value is of a certain type, such as a string or a number. There are eight basic data types, which we will cover in detail in the following sections.
sidebar:
  order: 1
---

## Understanding TypeScript: A Strongly Typed Superset of JavaScript

TypeScript, an extension of JavaScript, brings strong typing to the dynamically typed nature of JavaScript. In JavaScript, a variable can seamlessly change types:

```javascript
let message = "hello"; // Initially a string
message = 123456; // Now it's a number
```

However, TypeScript enhances this flexibility with type safety. It enforces type consistency, ensuring that variables maintain a single type throughout their lifecycle. This feature helps in catching errors during compilation, reducing runtime surprises. Here's how TypeScript handles the above scenario:

```typescript
let message: string = "hello"; // Explicitly declared as a string
message = 123456; // Error: Type 'number' is not assignable to type 'string'
```

Although TypeScript's strict type-checking can be overridden, this is generally discouraged. Disabling these checks might speed up development in the short term, but it risks reintroducing the very runtime errors TypeScript aims to prevent. Embracing TypeScript's type system leads to more robust, error-resistant code, aligning with best coding practices.

## Number

In TypeScript, the `number` type is a versatile and powerful tool that seamlessly represents both integer and floating-point numbers. It's a testament to TypeScript's ability to handle various numerical operations and values with ease. Here's how you can use the `number` type:

```typescript
let n: number = 123; // integer
n = 12.345; // floating-point
```

### Key Features of the `number` Type

1. **Support for Various Operations**: Whether it's basic arithmetic or complex calculations, the `number` type has got you covered. You can perform:

   - Multiplication (`*`)
   - Division (`/`)
   - Addition (`+`)
   - Subtraction (`-`)

2. **Handling Special Numeric Values**: TypeScript's `number` type goes beyond just integers and decimals. It also gracefully handles special values such as:
   - `Infinity`: A value that's beyond the upper limit of floating-point numbers.
   - `-Infinity`: Represents values that are lower than the minimum representable number.
   - `NaN` (Not a Number): This special value arises from undefined or erroneous mathematical operations.

```typescript
alert(1 / 0); // Displays 'Infinity'
alert(Infinity); // Also 'Infinity'
alert("not a number" / 2); // Results in 'NaN'
```

## BigInt

TypeScript addresses the limitations of the standard `number` type with the `BigInt` type, designed for handling extremely large integers. The regular `number` type in JavaScript and TypeScript can accurately represent integers only up to ±(2^53-1). Beyond this range, precision issues arise. Here's where `BigInt` comes into play.

### The Power of BigInt

`BigInt` is a special numeric type that can handle integers of arbitrary size. This is particularly useful in scenarios requiring high-precision integer arithmetic, like scientific computations, cryptography, or working with large datasets.

### Usage of BigInt in TypeScript

To define a `BigInt` in TypeScript, append `n` to the end of an integer literal:

```typescript
const bigInt: bigint = 1234567890123456789012345678901234567890n; // BigInt
```

### Points to Note

- `BigInt` and `number` are distinct types in TypeScript. They cannot be mixed in operations directly. For example, adding a `BigInt` and a `number` will result in a type error.
- `BigInt` is well-supported in modern browsers and Node.js environments, but be aware of compatibility issues in older environments (such as Internet Explorer).

## String

TypeScript, enhancing JavaScript's capabilities, brings strong typing to strings. Strings in TypeScript are essentially sequences of characters and must be enclosed in quotes. The flexibility in the choice of quotes allows for various use cases and functionalities.

### Types of Quotes in TypeScript

1. **Double Quotes (`" "`):** Commonly used for defining strings.

   ```typescript
   let str: string = "Hello";
   ```

2. **Single Quotes (`' '`):** Equally valid and interchangeable with double quotes.

   ```typescript
   let str2: string = "Single quotes are ok too";
   ```

3. **Backticks (`` ` ` ``):** Provide extended functionality.

   ```typescript
   let phrase: string = `can embed another ${str}`;
   ```

### The Power of Backticks

Backticks are particularly powerful in TypeScript for string manipulation. They allow:

- **Embedding Variables and Expressions:** Insert variables or entire expressions within a string seamlessly.

  ```typescript
  let name: string = "TypeScript";
  let greeting: string = `Hello, ${name}!`; // Embedding a variable
  ```

- **Creating Multi-line Strings:** Easily create strings that span multiple lines without the need for concatenation.

  ```typescript
  let multiLineString: string = `This is a string
  that spans across
  multiple lines.`;
  ```

### Practical Use in TypeScript

String manipulation and interpolation are common tasks in TypeScript programming. The flexibility of using different types of quotes, especially backticks for complex scenarios, makes string handling in TypeScript both efficient and expressive. This feature is particularly useful in template generation, UI development, and script writing, where dynamic string content is essential.

#### The Risk of Undefined Values

A common pitfall in TypeScript, as in JavaScript, is the inadvertent stringification of `undefined` values. When an undefined variable is embedded in a string, TypeScript converts it to the string "undefined". This can lead to unintended results, especially in user-facing applications where displaying raw "undefined" is undesirable.

Consider a scenario where a user profile is being displayed, but some of the user's information is missing:

```typescript
let userName: string = getUserData().name; // This might be undefined
let greeting: string = `Hello, ${userName}!`; // Risk of "Hello, undefined!"
```

To mitigate this, developers should implement checks or use default values:

```typescript
let userName: string = getUserData().name;
let safeGreeting: string = `Hello, ${userName || "Guest"}!`; // Default to 'Guest'
```

Alternatively, TypeScript's strict type checking can be leveraged to ensure variables are not undefined before stringification.

## Boolean

In TypeScript, the boolean type is fundamental, encapsulating the binary logic at the heart of programming decisions. It accepts only two values: `true` and `false`. This simplicity makes booleans essential for controlling program flow and handling decision-making logic.

### Core Concept

A boolean value in TypeScript represents a simple yes/no or true/false condition. The two possible boolean values are:

1. `true` – Signifies a positive or affirmative condition.
2. `false` – Indicates a negative or non-affirmative condition.

### Usage Example

```typescript
let isGreater: boolean = 4 > 1;
alert(isGreater); // Displays: true
```

In this example, `isGreater` is a boolean variable that evaluates the expression `4 > 1`. As 4 is greater than 1, the expression resolves to `true`.

### Role in Control Structures

Booleans are particularly useful in control structures such as `if` statements, `for` and `while` loops, and as conditions in functions. They are the key to branching and looping in code.

```typescript
if (isGreater) {
  console.log("4 is indeed greater than 1");
}
```

### Combining with Logical Operators

Boolean values can be combined with logical operators like AND (`&&`), OR (`||`), and NOT (`!`) to build complex logical conditions, thereby enhancing their utility.

```typescript
let isEven: boolean = n % 2 === 0;
let isPositive: boolean = n > 0;
let isValid: boolean = isEven && isPositive;
```

### Understanding Truthy and Falsy Values

In TypeScript, a superset of JavaScript, it's important to be aware of truthy and falsy values. While boolean types strictly accept `true` or `false`, logical expressions may involve values like `0`, `""` (empty string), `null`, `undefined`, and `NaN`, which are considered falsy.

### Strict Type Checking in TypeScript

TypeScript enhances JavaScript's flexibility with strict type checking, reducing errors related to unintended boolean conversions.

```typescript
let isActive: boolean = true;
// isActive = "yes"; // Error in TypeScript: Type 'string' is not assignable to type 'boolean'.
```

## Null and Undefined in TypeScript

In TypeScript, `null` and `undefined` are two distinct types that each play a unique role in handling the absence of a value, but in slightly different ways.

### Null

- Represents an intentional absence of any object value.
- Often used to signify "nothing", "empty", or "value unknown".

```typescript
let age: number | null = null; // The age is explicitly set to unknown
```

In the above example, `age` is explicitly set to `null`, indicating that the age is either not available or not applicable.

### Undefined

- Indicates that a variable has been declared but has not yet been assigned a value.
- Default value for variables that are declared but not initialized.

```typescript
let x: number | undefined; // x is declared but not defined
```

Here, `x` is declared with no initial value, thus its value is `undefined`. It's a subtle way to convey that the assignment is pending or the value is yet to be determined.

### Usage in TypeScript

TypeScript's type system allows for the explicit use of `null` and `undefined` to convey specific meanings:

- Use `null` to represent an intentional lack of value.
- Use `undefined` to indicate that a variable hasn’t been initialized.

### Combining with Other Types

Both `null` and `undefined` can be combined with other types in TypeScript, enabling variables to hold a value of a specific type or signify the absence of value.

```typescript
let optionalName: string | null = null; // Can be a string or null
let uninitializedValue: number | undefined; // Can be a number or undefined
```

### Distinction in TypeScript

TypeScript treats `null` and `undefined` as separate and distinct types, aligning with JavaScript's semantics but with added type safety. This distinction helps in writing clearer and more predictable code, especially when dealing with optional values or initializing variables.

## Objects and Symbols in TypeScript

TypeScript introduces robust handling of more complex data types through `object` and `symbol`. These types are vital for managing collections of data and ensuring unique property keys.

### Objects

- The `object` type in TypeScript is used to represent a collection of values.
- It is ideal for storing complex entities, where each entity can have a variety of properties and methods.

#### Usage

Objects can contain properties and methods. They are defined as collections of key-value pairs, where the keys are strings or symbols, and the values can be of any type.

```typescript
let user: { name: string; age: number } = {
  name: "John Doe",
  age: 30,
};
```

In this example, `user` is an object with properties `name` and `age`.

### Symbols

- A `symbol` in TypeScript is a unique and immutable primitive value and can be used as the key of an Object property.
- It is particularly useful when creating properties that are not intended to conflict with other properties in the same object, especially when dealing with libraries or larger codebases.

#### Usage

Symbols are created with the `Symbol()` function and are guaranteed to be unique.

```typescript
let sym = Symbol("key");
let obj = {
  [sym]: "value",
};
```

In the above example, `sym` is a symbol used as a key in the `obj` object. Despite having the same description (`"key"`), symbols are always unique.

### Practical Implications

- **Objects for Structured Data**: In TypeScript, objects are often used to organize and structure data, making it easier to manage and manipulate. They are the backbone of most TypeScript applications, especially when it comes to representing models, configurations, and state.
- **Symbols for Property Keys**: The use of symbols as property keys helps to avoid property name collisions, which can be crucial in complex applications and when integrating with third-party libraries. Symbols ensure that a property does not inadvertently overwrite an existing property on an object.

By utilizing `object` and `symbol` types, TypeScript provides powerful tools for structuring complex collections of data and ensuring the uniqueness and privacy of object properties.

## typeof Operator

The `typeof` operator returns the type of a variable:

```typescript
typeof 0; // "number"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"
typeof null; // "object" (error in TypeScript)
typeof alert; // "function"
```

## Summary

TypeScript has 8 basic data types: number, bigint, string, boolean, null, undefined, symbol, and object. The `typeof` operator helps identify the type of a variable.

This format organizes the information about TypeScript data types into a clear and structured document, suitable for educational material or documentation.
