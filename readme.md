https://jabirmahmud24.github.io/B12A05-Emergency-Services/

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   **Ans:**

- `getElementById` → returns one element by ID.
- `getElementsByClassName` → returns collection of elements with a class.
- `querySelector` → returns first element matching a CSS selector.
- `querySelectorAll` → returns all elements matching a CSS selector.

2. How do you **create and insert a new element into the DOM**?

   **Ans:** Use `document.createElement()`, set content/attributes, then insert with methods like `appendChild()`.

3. What is **Event Bubbling** and how does it work?

   **Ans:** An event starts from the target element and propagates upward through parent elements in the DOM.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   **Ans:** Attaching a single event listener to a parent to handle events on its child elements, using bubbling.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   **Ans:** - `preventDefault()` stops the default browser action like reloading.

- `stopPropagation()` stops the event from bubbling to parent elements.
