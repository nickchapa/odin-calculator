# odin-calculator
The final project of The Odin Project - Foundations Course!

Things I've learned:

- Be careful with using !value to check if a value exists, especially when using numbers. If the value is 0 or 1, it will use that to determine truthiness. Instead, use value == null.

- You can use expressions in template literals, but not statements. For example, you can't use an if statement but you can use the ternary operator like so `${value != null ? outputIfTrue : outputIfFalse}` 