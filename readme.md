### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

**1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll**

- `getElementById` → returns one element by ID.
- `getElementsByClassName` → returns live collection of elements with a class.
- `querySelector` → returns first element matching a CSS selector.
- `querySelectorAll` → returns all elements matching a CSS selector (static NodeList).

**2. How to create and insert a new element into the DOM**
Use `document.createElement()`, set content/attributes, then insert with methods like `appendChild()` or `insertBefore()`.

**3. Event Bubbling**
An event starts from the target element and propagates upward through parent elements in the DOM.

**4. Event Delegation**
Attaching a single event listener to a parent to handle events on its child elements, using bubbling.

**5. Difference between preventDefault() and stopPropagation()**

- `preventDefault()` stops the default browser action (e.g., form submit, link open).
- `stopPropagation()` stops the event from bubbling to parent elements.
