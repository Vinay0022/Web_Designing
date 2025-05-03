# Day 20

## Date

## 02 May 2025

## Tasks

- [ ] navbar active navbar-items.

## What I learned

- DOM
- setAttribute
- getElementById
- innerHTML => can write HTML tags inside it.
- input.value
- onchange
- innerText => Text only
- Difference between innerHTML and innerText.
- Dynamic Styling html with Javascript (for styling need to use separate variable for styling and innerHTML.)
- id is unique can be use by only one element.
- class can be used accross various elements.
- getElementById takes string(HTML element) as parameter.
- getElementsByClassName takes collection of html elements parameter.
- for looping for styling html.
- getElementsByTagName.
- radioButton.checked.
- querySelector(./#) => selects only the first element. dot for class and hash for id. It takes tags, css selectors.

### Concepts/Details

- DOM

When the web page is loded, dom is called first.
DOM Stands for Document Object Model.
DOM is programming interface for web documents.
DOM is w3c(world wide web consortium) standard.

There are 3 types of DOM.

1. Core DOM
   standard model for all documents types.
2. XML DOM
   standard model for xml documents.
3. HTML DOM
   standard model for html documents.

- setAttribute
  sets the value of an attribute on the specified element.(we specify the element with getElementById, etc...).

- getElementById
  getElementById is method that returns only one Element object whose id property matches the specified string(but it returns element object).

- What's the difference between innerHTML and innerText?
  The innerHTML allows to use html tags inside it while innerText only allow text.

- What's the most important thing when dealing with input tag?
  To use input.value for value with onchange.

- What's the most important thing when dealing with radioButton tag?
  To use radioButton.checked.

- What issue you face when styling html with javascript?
  style not being applied.
  Because we need to use different variables for both targetting and styling the element.

  ```javascript
  let el1 = document.getElementById("demo");
  let els2 = document.getElementById("demo");
  else2.style.backgroundColor = "red";
  ```

- What's the difference between "id" and "class"?
  id is unique it can be used only by one html element.
  class can be used by mutltiple html elements.

- getElementsByClassName
  It's a method that returns collection(array-like) of Elements object which matches the give class name.

- getElementByTagName
  return collection of Element objects with the give html tags name.

- querySelector(./#)
  selects only the first element. dot for class and hash for id. It takes tags, css selectors.
