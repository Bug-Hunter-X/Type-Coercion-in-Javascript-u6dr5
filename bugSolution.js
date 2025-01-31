```javascript
function myFunction(a, b) {
  //Check if both are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // performs arithmetic addition
  } else {
    //Handle other cases appropriately
    return 'Invalid input';
  }
}
console.log(myFunction(5, 10)); // Output: 15
console.log(myFunction(5, '10')); //Output: Invalid input
```