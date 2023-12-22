function hasKey(key) {
  // Check if the global object sampleObject contains the given key
  return sampleObject.hasOwnProperty(key);
}

// Global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Examples
console.log(hasKey("red"));    // Output: true
console.log(hasKey("blue"));   // Output: false
console.log(hasKey("white"));  // Output: true


// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
