# Type Coercion Bug in Javascript
This repository demonstrates a common bug in Javascript related to type coercion. When adding a number and a string, Javascript will automatically convert the number to a string and concatenate them instead of performing mathematical addition. This can lead to unexpected results if not handled properly. 

## Bug Description
The `myFunction` adds a number and a string. Javascript converts the number to a string and concatenates them.  This is because Javascript is dynamically typed. 

## Solution
The solution involves type checking or explicit type conversion to ensure that both operands are of the same type before performing the addition operation.