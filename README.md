------
#Training system M3S1 riwi.

##this simple interactive Javascript program asks the user to their namme and age from "prompt()".

-----

## How it works?
1. ask the user to enter their name and age.
2. Validates that the name contains (only letters in "name" and positive numbers in "age")
3. displays a message using (alert()) indicating whether the user is a minor or an adult

------

## validation rules

- **name** must not be empty and must contain only alphabetic characters(no numbers or symbols).
- **age** must be numeric and greater than 0.
- if the input is invalid, the user is asked to enter the data again.

-----

## how to use.

the core code is inside a fuction named `ìniApp()`, you can rn this directly in the browser console or connect it to a button in an HTML file.

### example HTML usage:

```html
<button onclick= "iniApp"()>start</button>
<script src = "script.js"></script>
