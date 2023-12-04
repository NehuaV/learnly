---
title: Introduction and History of Typescript
description: Basics and History
sidebar:
  order: 1
---

JavaScript has a unique history and relationship with Java, and the emergence of TypeScript represents a significant evolution in the JavaScript ecosystem. Here's an overview:

## History of JavaScript

### 1. Origins (1995)

JavaScript was created by Brendan Eich at Netscape Communications, initially named Mocha, then renamed to LiveScript, and finally to JavaScript. It was designed to make web pages dynamic and interactive.

### 2. Standardization (1997)

When JavaScript was first introduced by Netscape, there was a war going on between all the browser vendors on the market at the time. Microsoft and several other browser vendors implemented their own versions of JavaScript (with different names and syntax) in their respective browsers. This created a huge headache for developers, as code that worked fine on one browser was a total waste on another. This went on for a while till they all agreed to use the same language (JavaScript) in their browsers.

As a result, Netscape submitted JavaScript to the European Computer Manufacturers Association (ECMA) for standardization in order to ensure proper maintenance and support of the language. Since JavaScript was standardized by ECMA, it was officially named ECMAScript.

Originally, the name ECMAScript was just the formalization of JavaScript, but now languages like JScript and ActionScript are also based on the ECMAScript standard. They can be thought of like 3 different cars using the same engine.

Though they are closely linked to each other, the terms “JavaScript” and “ECMAScript” do not mean the same thing. JavaScript has two major host environments: browsers and Node.js. These environments add some APIs to the language. If you strip all the external APIs from these environments, you get ECMAScript. In simple words, you can think of ECMAScript as JavaScript without a host environment.

### 3. Evolution

Over the years, JavaScript underwent numerous updates, adding features like AJAX, JSON support, and enhancements to its core functionalities. The arrival of Node.js in 2009 expanded JavaScript's reach to server-side programming.

## JavaScript vs. Java

- **Different Purposes**: Java, developed by Sun Microsystems, is a general-purpose, object-oriented language used for desktop, server, and mobile applications. JavaScript, in contrast, was primarily designed for web-based applications.
- **Syntax Similarities**: Despite the naming similarity and some common syntax elements, JavaScript and Java are fundamentally different. JavaScript is a dynamic, loosely typed language, while Java is statically typed and compiled.
- **Runtime Environments**: Java code is typically run on the Java Virtual Machine (JVM), whereas JavaScript code runs in the web browser's JavaScript engine, or on the server (Node.js).

## Emergence of TypeScript

- **Introduction (2012)**: TypeScript was introduced by Microsoft as a superset of JavaScript. It added static typing and class-based object-oriented programming to JavaScript.
- **Benefits**:
  - **Type Safety**: TypeScript's key feature is its optional static typing system, which helps in detecting errors at compile time, making it suitable for larger projects.
  - **Better Tooling**: Enhanced autocompletion, navigation, and refactoring services in development environments.
  - **Backward Compatibility**: TypeScript is backward compatible with JavaScript, meaning any valid JavaScript code is also valid TypeScript.
- **Adoption**: TypeScript has seen widespread adoption in the web development community, especially in complex or large-scale projects, due to its ability to improve maintainability and developer productivity.

## What is Typescript

TypeScript is a modern programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing to JavaScript, which can help catch errors early during the development process. This feature enhances code quality and readability, especially in larger codebases.

```typescript
// Typescript code
const variable: number = 1;

// Javascript code
const variable = 1;
```

TypeScript compiles down to plain JavaScript, making it compatible with any browser, host, or operating system that supports JavaScript.

## How TypeScript Differs from JavaScript

JavaScript and TypeScript are central to modern web development, but they serve different purposes. TypeScript, developed as a superset of JavaScript, introduces crucial differences, primarily aimed at enhancing code quality and maintainability for larger projects.

### Introduction of Static Typing

The most notable difference between TypeScript and JavaScript is TypeScript's static typing. Unlike JavaScript's dynamic typing, where variable types are determined at runtime, TypeScript allows developers to declare types at compile time. This static typing helps identify type-related errors early in the development process, reducing runtime errors and making the code more robust and easier to maintain.

```typescript
const text: string = "Some text";
const numeric: number = 1000;

// Error: Cannot subtract a number from text.
const result = text - numeric;
```

### Type Inference: A Balance Between Rigidity and Flexibility

TypeScript enhances the static typing system with type inference. This means that even if a developer doesn't explicitly specify a type, TypeScript can infer it based on the value assigned to a variable. For instance, if you assign a string to a variable, TypeScript understands that the variable is of the type string. This feature strikes a balance between the rigidity of static typing and the flexibility JavaScript developers are accustomed to. It simplifies TypeScript’s adoption by allowing developers to gradually enforce type safety without drastically altering their coding style.

### Enhanced Features for Large-Scale Development

TypeScript goes beyond static typing by offering additional features like interfaces, generics, and namespaces. Interfaces help define object structures, generics enable type-safe reusable components, and namespaces aid in organizing code and preventing naming conflicts. These features, not present in JavaScript, are particularly beneficial for complex, large-scale applications.

## Comments in Typescript

Comments are integral in TypeScript for code documentation. They improve the readability and maintainability of the code by providing explanations or instructions.

### Single-line comments in Typescript

Single-line comments are used for brief annotations. They start with `//` and extend to the end of the line. They are ideal for short notes or for temporarily disabling a single line of code.

Example:

```typescript
// This is a single-line comment in TypeScript

let example = 10; // This comment is inline with code

// let example2 = 'This line is now disabled';
```

### Multiline comments in typescript

Multiline comments, enclosed within `/*` and `*/`, are suitable for lengthy descriptions or for blocking out large sections of code. They can span several lines and are especially useful for documenting complex logic or algorithms.

Example:

```typescript
/*
 This is a multiline comment in TypeScript.
 It can cover multiple lines.
 Useful for complex explanations or temporarily commenting out large code blocks.
*/
let example = "This is outside the comment block";
```

These commenting features in TypeScript are essential tools for developers to communicate the intent, purpose, and functionality of their code.
