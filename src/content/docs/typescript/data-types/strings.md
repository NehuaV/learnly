---
title: Strings
sidebar:
  order: 4
---

TypeScript handles textual data using strings. Unlike some languages that have a distinct character type, TypeScript does not; even a single character is a string.

Internally, TypeScript represents strings in [UTF-16](https://en.wikipedia.org/wiki/UTF-16) format, independent of the page's character encoding.

## String Quotes

In TypeScript, strings can be defined using single quotes, double quotes, or backticks:

```ts
let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;
```

While single and double quotes function similarly, backticks provide extended functionality, enabling embedded expressions, indicated with `${…}`:

```typescript
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Backticks also support multi-line strings:

```typescript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // displays a multi-line list of guests
```

In contrast, single or double quotes do not support this multi-line format and will result in a syntax error.

## Special Characters

Special characters can be added to strings using the backslash `\` (also known as the "escape character"):

```typescript
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multi-line list of guests
```

Common special characters include:

- `\n`: New line
- `\r`: Carriage return
- `\'`, `\"`: Quotes
- `\\`: Backslash
- `\t`: Tab
- `\b`, `\f`, `\v`: Backspace, Form Feed, Vertical Tab (less common)

To insert a literal backslash, double it (`\\`).

## String Length

The `length` property provides the string's length:

```typescript
alert(`My\n`.length); // 3 (includes the newline character)
```

## Accessing Characters

Characters within a string can be accessed using square brackets `[pos]` or the `at(pos)` method:

```typescript
let str = `Hello`;

alert(str[0]); // H
alert(str.at(0)); // H

alert(str[str.length - 1]); // o
alert(str.at(-1)); // o (last character)
```

`for..of` can also be used to iterate over characters:

```typescript
for (let char of "Hello") {
  alert(char); // H, e, l, l, o
}
```

## Strings are Immutable

Strings in TypeScript cannot be altered once created. While you cannot change a character within a string, you can create a new string and assign it:

```typescript
let str = "Hi";
str = "h" + str[1]; // 'hi'
```

## Case Conversion

Use `toLowerCase()` and `toUpperCase()` to change case:

```typescript
alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
```

## Searching for a Substring

To find a substring, you can use `indexOf`, `includes`, `startsWith`, or `endsWith`:

- `str.indexOf(substr, pos)`: Returns the position of `substr` in `str` starting from `pos`.
- `str.includes(substr, pos)`: Checks if `str` contains `substr`.
- `str.startsWith(searchString, pos)`: Checks if `str` starts with `searchString`.
- `str.endsWith(searchString, length)`: Checks if `str` ends with `searchString`.

## Extracting a Substring

There are several methods to extract a substring:

- `slice(start, end)`: Extracts a part of the string from `start` to `end`.
- `substring(start, end)`: Similar to `slice` but allows `start` to be greater than `end`.
- `substr(start, length)`: Extracts a substring of `length` characters starting from `start`.

## Comparing Strings

Strings are compared based on standard lexicographical ordering using Unicode values. However, this can lead to unexpected results, particularly with case and diacritical marks. To correctly compare strings:

- `str.localeCompare(str2)`: Compares according to local language rules.

## Summary

Strings in TypeScript are versatile, supporting various methods for manipulation, comparison, and search/replace. Remember:

- Strings can be defined with single quotes, double quotes, or backticks.
- Special characters like newline (`\n`) can be included.
- Strings have a `length` property.
- Characters can be accessed using bracket notation or `at()`.
- Strings are immutable but can be reassigned.
- Substrings can be extracted and strings can be altered using various methods.
- Strings

are compared by their Unicode values, but `localeCompare` provides locale-aware comparison.

TypeScript's string handling, particularly with Unicode, can be complex, and there are additional topics like regular expressions for more advanced search/replace operations. For further details, refer to TypeScript documentation and additional resources on string manipulation and Unicode handling.
