---
title: Numbers in TypeScript
sidebar:
  order: 3
---

TypeScript supports two types of numbers:

1. **Regular Numbers**: These are stored in a 64-bit format known as "double precision floating point numbers," following the [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754) standard. Regular numbers are the most common type used in TypeScript.

2. **BigInt Numbers**: BigInts represent integers of arbitrary length. Regular numbers cannot safely exceed \((2^{53}-1)\) or be less than \(-(2^{53}-1)\). BigInts are useful for handling values beyond this range and are discussed in a separate chapter.

This chapter focuses on regular numbers, exploring their properties and the various ways they can be utilized in TypeScript.

## Various Representations of a Number

TypeScript provides multiple ways to represent numbers, enhancing readability and convenience. For instance, to denote 1 billion:

```typescript
let billion = 1000000000; // Traditional way

// Using underscore for readability
let billion = 1_000_000_000;
```

Underscores in TypeScript numbers act as syntactic sugar, improving readability without affecting the actual value.

### Scientific Notation (e-notation)

TypeScript supports scientific (exponential) notation:

```typescript
let billion = 1e9; // 1 followed by 9 zeroes

alert(7.3e9); // Equivalent to 7,300,000,000
```

Using `e` scales the number by powers of 10.

### Small Decimal Numbers

For small numbers, such as a microsecond (one millionth of a second):

```typescript
let microsecond = 1e-6; // Equivalent to 0.000001
```

### Hexadecimal, Binary, and Octal Numbers

TypeScript also supports hexadecimal, binary, and octal numbers:

```typescript
// Hexadecimal
alert(0xff); // 255

// Binary
let binary = 0b11111111; // 255

// Octal
let octal = 0o377; // 255
```

## `toString(base)` Method

The `num.toString(base)` method returns a string representation of a number in a specified base:

```typescript
let num = 255;
alert(num.toString(16)); // "ff"
alert(num.toString(2)); // "11111111"
```

## Rounding Methods

TypeScript provides various methods for rounding numbers:

- `Math.floor`: Rounds down.
- `Math.ceil`: Rounds up.
- `Math.round`: Rounds to the nearest integer.
- `Math.trunc`: Removes anything after the decimal point.

### Rounding to a Specific Decimal

For rounding to a specific decimal:

```typescript
let num = 1.23456;

// Method 1: Multiply-and-divide
alert(Math.round(num * 100) / 100); // 1.23

// Method 2: toFixed
alert(num.toFixed(2)); // "1.23"
```

## Handling Imprecise Calculations

Due to the binary representation of numbers, operations involving fractions can yield imprecise results:

```typescript
alert(0.1 + 0.2); // 0.30000000000000004
```

### Solutions

1. **Rounding**: Use `toFixed(n)` to round the result to a fixed number of decimal places.
2. **Integer Conversion**: Multiply to convert to an integer, perform the operation, then divide back.

## Special Numeric Values

TypeScript has two special numeric values: `Infinity` and `NaN` (Not-a-Number).

### Checking for Special Values

- `isNaN(value)`: Checks if a value is NaN.
- `isFinite(value)`: Checks if a value is a regular number (not NaN/Infinity/-Infinity).

## Parsing from Strings

`parseInt` and `parseFloat` parse a number from a string until they hit a non-numeric character:

```typescript
alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5
```

## Other Math Functions

TypeScript's `Math` object provides various mathematical functions and constants. For example:

- `Math.random()`: Generates a random number between 0 and 1.
- `Math.max/min()`: Returns the largest/smallest number from a set of arguments.
- `Math.pow(n, power)`: Calculates \(n\) raised to the power of `power`.

## Summary

- TypeScript numbers can be written in various formats for convenience.
- Special methods and properties are available for rounding, precision control, and handling special numeric values.
- The `Math` object provides a suite of basic mathematical operations and constants.
