# Unexpected Runtime Error in TypeScript

This repository demonstrates a common, yet subtle, error in TypeScript: runtime errors caused by implicit type coercion that bypasses compile-time type checking.  TypeScript's type system is strong but not foolproof, and it doesn't catch all runtime issues, especially those involving loose type comparisons or conversions.

The `bug.ts` file contains a function `add` which is supposed to add two numbers but accepts a string resulting in a runtime error.  The `bugSolution.ts` file shows how to mitigate this using type guards or more explicit type assertions.