Excersises:

1
a. Print "Hello world" in the console when the page is loaded.
b. Print "Hello world" to the console whenever the button is clicked
c. Print "Hello [name]" to the console whenever the button is clicked, where [name] is the current content of the input field.

2
a. Make an API call to https://dog.ceo/api/breeds/image/random whenever the button is clicked and print the result to the console.
b. Add an image showing the random dog image inside the "result" div

3
a. On page load, Fetch a list of all dog breeds using https://dog.ceo/api/breeds/list/all
and print the result to the console.

b. Transform the response to a list of dog breeds (strings)
Hint: use Object.keys() to get an array of an objects keys

c. Print the breeds in the "breeds" aside.
Hint: Use element.insertAdjacentHTML('beforeend', '...');

4
a. Whenever a letter is typed in the input field, filter the list to breeds starting with the input value
Hint: Use the 'input' event to bind a function to a letter being typed.
Hint: Try to reuse the previously fetched list and not fetch a new list every time you type.
Hint: To check whether a string starts with another string, you can use str.indexOf()

b. When a breed name is clicked, render a random image of that breed in the "result" div.
https://dog.ceo/api/breed/{BREED_NAME}/images/random
Hint: You might have to use document.createElement to create the clickable breeds

More:
Show the sub-breeds somehow, maybe flatten the nested breed list?
