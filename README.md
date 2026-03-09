# odin-calculator
The final project of The Odin Project - Foundations Course!

Things I've learned:

- Be careful with using !value to check if a value exists, especially when using numbers. If the value is 0 or 1, it will use that to determine truthiness. Instead, use value == null.

- You can use expressions in template literals, but not statements. For example, you can't use an if statement but you can use the ternary operator like so `${value != null ? outputIfTrue : outputIfFalse}`

- Don't use symbols or start with digits for element ids and classes. It causes issues in CSS and JavaScript

- When using a click event listener, clicking in-between buttons contained in a div will return a target of the div. I needed to add a check to make sure a button was clicked.

- Related to the above point, I learned that you can just use element.closest('CSS Selector') to get the node that matches the specified CSS selector. So in the case of a button within a div, if the button has a class '.digit', you can use element.closest('.digit') to check if you clicked on an element with that class.

- When you declare a variable within a specific scope, like an if statement, it cannot be read outside of that scope.

- Use window.addEventListener to get keydown events