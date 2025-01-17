function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  // Type checking to prevent errors
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or handle the error appropriately, e.g., throw an error
  }

  return a + b; 
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 0
console.log(foo("10", 20)); // Output: 0 (Corrected Behavior)
console.log(foo(10, "20")); // Output: 0 (Corrected Behavior) 