function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type Error. This will not produce an error during compilation but during runtime.