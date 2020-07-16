## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

.forEach

A method which calls a callback function once for each element in an array, in ascending order.

const array = ['bear', 'cat', 'dog'];
array.forEach(element => console.log(element));

.map

This method creates a new array populated with the results of calling a function provided on every element in the calling array.

const array = [1, 2, 3, 4]
const maps = array.map(x => x + 5);

.filter

A method which creates a new array with all elements that pass the test stipulated by the filter function.

const words = ['bob', 'peter', 'jo', 'mel, 'simon', ali];
const result = words.filter(word => word.length > 3);

.find

This method returns the value of the first element that satisfies the testing function provided in the array.

const ages = [4, 17, 21, 97, 166]
const adult = ages.find(element => element > 18)
