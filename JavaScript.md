- https://jsonplaceholder.typicode.com/todos => For dummy data for get request
- https://dummyjson.com/docs/products => For dummy data for other CURD request

- document.write() --> don't use it after the document is loaded
- window.print() --> To print the page
- You can also declare multiple variables in single line:
- - let person = "John Doe", carName = "Volvo", price = 200;
- A variable declared without a value will have the value undefined. - let carName;
- let: have Block Scope, must be Declared before use, cannot be Redeclared in the same scope

- Always use const for new Array, Object, Function, RegEx

- String compares alphabetically:

```bash

- let x = "5" + 2 + 3; # 523
- let x = 2 + 3 + "5"; # 55

console.log("2", 2)
console.log("2"+ 2)

let text1 = "A";
let text2 = "B";
let result = text1 < text2; # returns true

let text1 = "20";
let text2 = "5";
let result = text1 < text2; # returns true
```

- typeof vs instanceOf =>

```bash
# Use instanceof for custom types:
var ClassFirst = function () {};
var instance = new ClassFirst();
instance instanceof ClassFirst; // true
# Use instanceof for complex built in types:
/regularexpression/ instanceof RegExp; // true

# Use typeof for simple built in types:
typeof true == 'boolean'; // true
typeof 99.99 == 'number'; // true
typeof "John";            // Returns "string"
typeof 3.14;              // Returns "number"
typeof (3);               // Returns "number"
typeof (3 + 4);           // Returns "number"
```

- Logical AND operator, Logical OR operator, Nullish coalescing operator

  - && => If the first value is true, the second value is assigned.
  - || => If the first value is false, the second value is assigned.
  - ?? => If the first value is undefined or null, the second value is assigned.

- 8 Datatypes: String,Number, Bigint, Boolean, Undefined, Null, Symbol, Object

  - The object data type can contain both built-in objects, and user defined objects:
  - objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, maths, functions,.. are build-in objects (All JavaScript values, except primitives, are objects.)

```bash
# exponential notation
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
```

- Objects: https://www.w3schools.com/jsref/jsref_obj_object.asp (for more info/methods)

```bash
# Create an empty Objects
const person = {}; # 1st way
const person = new Object(); # 2nd way

# fullName is a method (same as function)
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  # // this refers to person object (if properties of person changes then the value of this also changes)
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
};

# accessing the objects
person.lastName;
person["lastName"];
let x = "lastName";
person[x];

# updating the objects
person.lastname = "Meo";

# Add new properties
person.nationality = "English";

# deleting a properties
delete person.lastname; // (or) delete person["age"];

# accessing nested objects
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
myObj["myCars"].car2;

# accessing object method
name = person.fullName();
```

- Objects are mutable: They are addressed by reference, not by value.

```bash
// Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10; # This will change the value in both the person and x.
```

- How to Display JavaScript Objects?

  1. Displaying the Object Properties by name
  2. Displaying the Object Properties in a Loop
  3. Displaying the Object using Object.values()
  4. Displaying the Object using JSON.stringify()

```bash
# 1
person.name

# 2
let text = "";
for (let x in person) {
    text += person[x] + " ";
}

# 3
const myArray = Object.values(person); // ['John', 'Deo', 50]
const myArray = Object.keys(person); // ['firstName', 'lastName', age]
const myArray = Object.entries(person); // [ [ 'firstName', 'John' ], [ 'lastName', 'Deo' ], [ 'age', 50 ] ]

# 4
JSON.stringify(person)

# Find a length of object
const size = Object.keys(person).length;
```

- Object Constructor:

```bash

# Create a Object Type Person (Constructor) -> USING FUNCTION
function Person(first, last, age) {
  this.firstName = first; // this value will be created by new person objects
  this.lastName = last;
  this.age = age;
  this.eyeColor = Blue; // This value is default (ie. available to everyone)
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

# create new Person objects
const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

# Adding a Property to an Object
myFather.nationality = "English";

# Adding a Property to a Constructor
Person.prototype.state = "Goa"; # cannot write Person.nationality = "English";
  # - IT CAN'T BE VISIBLE IN LOG BUT CAN BE ACCESS BY .(DOT)
  console.log(myFather); # This won't include state BUT
  console.log(myFather.state); # This will give Goa

# Adding a Method to an Object
myMother.changeName = function (name) {
  this.lastName = name;
}
# Adding a Method to an Constructor
Person.prototype.changeName = function (name) {
  this.lastName = name;
}
myMother.changeName("Doe"); // Then simply type this to call a method

# Built-in JavaScript Constructors
new Object();   // A new Object object =or=> {}
new Array();    // A new Array object =or=> []
new Map();      // A new Map object
new Set();      // A new Set object
new Date();     // A new Date object
new RegExp();   // A new RegExp object =or=> /()/
new Function(); // A new Function object =or=> () {}

#NOTE:: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
```

- JavaScript Strings as Objects: (Avoid this -> new String())

```bash
# String objects can produce unexpected results and slows down execution speed.
let x = "John";
let y = new String("John");
x === y; // false

let z = new String("John");
x == z; x === z; // Both will return false

#NOTE:: Comparing two JavaScript objects always returns false.
```

- Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

- STRING METHODS

```bash
let text = "HELLO WORLD";
let length = text.length; # returns length
let char = text.charAt(0); # returns charcter at 0 =>>
let char = text.charCodeAt(0); # returns ASIIC Codde at 0
let letter = name.at(2); # returns charcter at 2 ==>> ALLOW -VE INDEXING
let letter = name[2]; # returns charcter at 2 [AVOID THIS] --USE CHARAT OR AT()
# REVISE
# slice(start, end)
# substring(start, end) # SAME as slice but values less than 0 are treated as 0 in substring().
let part = text.slice(7);
let part = text.slice(7, 8); # only one number selected
let part = text.slice(-2); # only last two
# substr(start, length)

let text2 = text1.toUpperCase();
let text2 = text1.toLowerCase();.

let text3 = text1.concat(" ", text2);
let text3 = "Hello" + " " + "World!"; # same as above
console.log([1, 2] + [3, 4]); # 1,23,4
# The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.

let text2 = text1.trim(); # remove spaces from both side
let text2 = text1.trimStart();
let text2 = text1.trimEnd();

let text = "5";
let padded = text.padStart(4,"0"); # 0005 # it will add 0 untill it find 4th position
let padded = text.padStart(4,"x"); # xxx5
let padded = text.padEnd(4,"x"); # 5xxx
let padded = text.padEnd(4,"abcdefg"); # 5abc

let text = "Hello world!";
let result = text.repeat(4); # Hello world!Hello world!Hello world!Hello world!

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); # only 1st Microsoft is replaced
let newText = text.replace(/Microsoft/g, "W3Schools"); # TO REPLACE ALL (regex is used)
let newText = text.replaceAll(Microsoft, "W3Schools"); # REPLACE ALL
let newText = text.replace("MICROSOFT", "W3Schools"); # WON'T REPLACE AS CASE SENSITIVE
let newText = text.replace(/MICROSOFT/i, "W3Schools"); # USE REGEX FOR CASE INSENSITIVE

let newText = text.split(" ") #["Hello", "world!"] create arr # can do with "o" or ""

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); # 7 # will return 1st occurance or -1
let index = text.indexOf("locate", 15); # 21 AS IT WILL START COUNTING FROM 15
let index = text.lastIndexOf("locate"); # 21 # will return last occurance or -1
let index = text.search("locate"); # same as indexOf
let index = text.search(/Locate/i);
# The search() method cannot take a second start position argument.
# The indexOf() method cannot take powerful search values (regular expressions).
# BOTH SEARCH() AND INDEXOF() WILL RETURN -1 IF NO VALUE IS FOUND
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));                                                # -1
# The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always.

let text = "The rain in SPAIN stays mainly in the plain";
let newText = text.match("ain"); # ["ain", index:5,input:"the...plain",group:]
let newText = text.match(/ain/gi); # [ 'ain', 'AIN', 'ain', 'ain' ]
let newText = text.matchAll('ain'); # provide all array of same match
# this will give array of array[["ain", index:5,input:"the...plain",group:]..[]]
  for (let x of newText) {
    console.log(x);
  }
# REVISE
# includes, startWith, and endsWith are case sensitive
let text = "Hello world, welcome to the universe.";
let newText = text.includes("world"); # true # will return true if text exists
let newText = text.includes("world", 12); # false # starts from 12 index

let newText = text.startsWith("Hello"); # true # as it start with Hello
let newText = text.startsWith("world", 6) # true # as at 6th index it start with world
let newText = text.endsWith("universe"); # true # as it ends with universe
let newText = text.endsWith("world", 11); # true # as at 11th index it ends with world

```

- Numeric Strings

```bash
# Only + will convert number to string
let x = 10;
let y = 20;
let z = "The result is: " + x + y; # not 30 but 1020

let x = "100"; # IT WILL WORK AS NUMBER IF NOT ADDED (ELSE IF 100E THEN NaN)
let y = "10";
let z = x / y; # return 10 (work as number)
let z = x * y; # return 1000 (work as number)
let z = x - y; # return 90 (work as number)
let z = x + y; # return 10010 (work as string)
```

- NaN - Not a Number && Infinity

```bash
let x = 100 / "Apple"; # NaN
isNaN(x); # true
typeof NaN; # number # NaN is a number
let x =  2 / 0; # Infinity # Infinity is a number

let x = 0xFF; # x = 255 # write 0x to before to write hexadecimal number

let myNumber = 255;
myNumber.toString(32); # 7v
myNumber.toString(16); # ff # converted to hexadecimal
myNumber.toString(12); # 193
myNumber.toString(10); # 255 # By default, JS displays numbers as base 10 decimals
myNumber.toString(8); # 377
myNumber.toString(2); # 11111111 # converted to binary

let x = 500;
let y = new Number(500);
x == y; # true
x === y; # false

let z = new Number(500);
x == y; x === y; # both are false as Comparing two JS objects always returns false.

let x = 1234567890123456789012345n; # write n at end to create BigInt
let y = BigInt(1234567890123456789012345) # write this to create BigInt
let hex = 0x20000000000003n; # BigInt in hexadecimal

let x = 5n; # BigInt
let y = x / 2; #==> Error: Cannot mix BigInt and other types, use explicit conversion.
let y = Number(x) / 2; # Convert to number
console.log(y);

let x = Number.MAX_SAFE_INTEGER; # (9007199254740991) gives max integer that is safe to work with
let x = Number.MIN_SAFE_INTEGER; # (-9007199254740991) gives min integer that is safe to work with
Number.isInteger(10); # returns true -> IT CHECKS ONLY WHOLE NUMBER
Number.isInteger(10.5); # returns false (as not integer but float or decimal)
Number.isInteger(12345678901234567890); # returns true
Number.isSafeInteger(12345678901234567890); # returns false

# REVISE
const x = 223.24;
Number.isFinite(x); #(true) Checks whether a value is a finite number
Number.isInteger(x); #(false) Checks whether a value is an integer
Number.isNaN(x); #(false) Checks whether a value is Number.NaN
Number.parseFloat(x); #(223.24) Parses a string an returns a number
Number.parseInt(x); #(223) 	Parses a string an returns a whole number
x.toFixed(4); #(223.2400) [ONLY NUMBERS][ROUND-VALUE] 4 numbers of digits after decimal point
x.toPrecision(4); #(223.2) [ONLY NUMBERS][ROUND-VALUE] Total 4 numbers with or without decimal
x.toString(10); #(223.24) Converts a number to a string -OPTINAL (BASE CONVERSION (2 to 32))- radix
```

- String Methods

```bash

toString(), toExponential(), toFixed(), toPrecision() --> all returns string

let x = 123;
x.toString(); # Converts a number to a string

let x = 912342134.656;
x.toExponential(); # 9.12342134656e+8
x.toExponential(2); # 9.12e+8
x.toExponential(4); # 9.1234e+8
x.toExponential(6); # 9.123421e+8

let x = 921.656;
x.toFixed(0); # 922
x.toFixed(2); # 921.66
x.toFixed(4); # 921.6560
x.toFixed(6); # 921.656000

let x = 92.656;
x.toPrecision(); # 92.656
x.toPrecision(2); # 93
x.toPrecision(4); # 92.66
x.toPrecision(6); # 92.6560

# REVISE
Number(true);                                                               # 1
Number(false);                                                              # 0
Number("-10");                                                              # -10
Number("  10");                                                             # 10
Number("10  ");                                                             # 10
Number("10  10");                                                           # NaN
Number(" 10  ");                                                            # 10
Number("10.33");                                                            # 10.33
Number("10,33");                                                            # NaN
Number("10 33");                                                            # NaN
Number("John");                                                             # NaN

# parses string to whole number. Spaces are allowed. Only the first number is returned:
parseInt("-10");                    # -10
parseInt("-10.33");                 # -10
parseInt("10");                     # 10
parseInt("10.33");                  # 10
parseInt("10 20 30");               # 10
parseInt("10 years");               # 10
parseFloat("10,10 years");          # 10
parseInt("years 10");               # NaN

Number("10  10");                                                           # NaN
parseInt("10  10");                                                         # 10

# parseInt(string, radix) # radix is number from 2 to 32 for base number system
parseInt("0xF", 16);                # 15
parseInt("F", 16);                  # 15
parseInt("17", 8);                  # 15
parseInt("015", 10);                # 15
parseInt("15,123", 10);             # 15
parseInt("FXX123", 16);             # 15
parseInt("1111", 2);                # 15
parseInt("15 * 3", 10);             # 15
parseInt("15e2", 10);               # 15
parseInt("15px", 10);               # 15
parseInt("12", 13);                 # 15

# parses string to number. Spaces are allowed. Only the first number is returned:
parseFloat("10");                   # 10
parseFloat("10.33");                # 10.33
parseFloat("10 20 30");             # 10
parseFloat("10 years");             # 10
parseFloat("10,10 years");          # 10
parseFloat("years 10");             # NaN

# The Date() method returns the number of milliseconds since 1.1.1970.
Number(new Date("1970-01-01")) # It returns nothing as it is before the date
Number(new Date("1970-01-02")) # 86400000
Number(new Date("2017-09-30")) # 1506729600000

```

- Array: Creating it

```bash
const cars = ["Saab", "Volvo", "BMW"]; # use this
const cars = new Array("Saab", "Volvo", "BMW");

cars.toString()  # Saab,Volvo,BMW
cars.length   # Returns the number of elements

# Sorts the array ALPHABETICALLY USING ASIIC VALUE (NUMBERS ALSO )
const cars = ["Saab", 3, 25, 2, "Volvo", "BMW"];
cars.sort()    # [ 2, 25, 3, 'BMW', 'Saab', 'Volvo' ]
const cars = [3, 5, 2, 34, 0, 4];
cars.sort()    # [ 0, 2, 3, 34, 4, 5 ]
const cars = [3, 0, 4, , , , 1];
cars.sort()    # [ 0, 1, 3, 4, <3 empty items> ]

cars[6] = "Audi";  # Creates undefined "holes" in cars # NO UNDEFINED(MAYBE)

# You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

# typeof operator in JavaScript returns "object" for arrays.
# SO 2 WAYS TO FIND IF IT'S ARRAY OR NOT
Array.isArray(cars); # returns true # To Know if it is array or not
cars instanceof Array # returns true
```

- Nested Arrays and Objects

```bash
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
# of for array and in for object
for (let car of myObj.cars) {
  console.log(car.name);
  for (let model of car.models) {
    console.log(model);
  }
}
```

- Basic Array Methods

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

fruits.toString(); # Banana,Orange,Apple,Mango
fruits.join(" * "); # Banana * Orange * Apple * Mango

fruits.at(2); # allow negative index
fruits[2]; # negative not allowed

fruits.pop(); # removes and returns the last element
fruits.push("Kiwi");  # adds to the last element  and returns the new array length

fruits.shift(); # same as pop but for first element
fruits.unshift("Lemon"); # same as push but for first element

fruits[fruits.length] = "Kiwi"; # It will add to end of the array

# Don't do it
delete fruits[0]; # it leaves undefined holes in the array. # Use pop() or shift() instead.
# or use splice

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2); # add arr2 and arr1
const myChildren = arr1.concat(arr2, arr3); # add arr3, arr2 and arr1
const myChildren = arr1.concat("Peter"); #

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0);
fruits.copyWithin(2, 0, 2);

# method overwrites the existing values + does not add items to the array + does not change the length of the array

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "grapes"];
fruits.copyWithin(2, 0); # [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.copyWithin(2, 0, 2) # [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'grapes' ]

# Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
const myArr = [1, 2, [3, [4, 5, [6, 7]]]]; # array contains 3 sub-array
const newArr = myArr.flat(); # [ 1, 2, 3, [ 4, 5, [ 6, 7 ] ] ]
const newArr = myArr.flat(2); # [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
const newArr = myArr.flat(3); # [ 1, 2, 3, 4, 5, 6, 7 ]
const newArr = myArr.flat(Infinity); # [ 1, 2, 3, 4, 5, 6, 7 ]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); # (start, deleteCount, ...items)
fruits.splice(3, 1); # here 1 item from 3rd position will be removed from the array
# Splice method modifies the original array and returns the deleted array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3); # [ 'Apple', 'Mango' ]
const citrus = fruits.slice(1, 3); # [ 'Orange', 'Lemon' ]
# Slice method doesn't mutate the original array but it returns the subset as a new array.

# All JavaScript objects have a toString() method.
```

- Array Find and Search Methods

```bash
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1; # 1 # to get index of first apple + 1

let position = fruits.lastIndexOf("Apple") + 1; # 3 # to get index of last apple + 1

fruits.includes("Mango"); # is true

# find will return first element and filter will return all matched element
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value, index, array) => {
  return value > 18;
});
let first = numbers.findIndex((value, index, array) => {
  return value > 18; # This will give first find index instead of the element value
});
let last = numbers.findLast((x) => x > 18); # give last value
let last = numbers.findLastIndex((x) => x > 18); # give last value index

```

- Array Sort Methods

```bash
# Alpabetic Sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); # Alphabetically like dictionary # THIS WILL ALTER THE ORIGINAL ARRAY
fruits.reverse(); # It will reverse the whole array
# So by combining both we can get array in descending order

#For descending Order # USE BUILD IN METHODS IF POSSIBLE (ABOVE AVOID THIS)
const sorted = fruits.sort((a, b) => b.localeCompare(a));

const sorted = fruits.toSorted(); # THIS WILL CREATE A NEW ARRAY WITHOUT ALTERING ORIGINAL
const sorted = fruits.toReversed(); # THIS WILL CREATE A NEW ARRAY WITHOUT ALTERING ORIGINAL

const points = [ 40, 100, 1, 5, 25, 10 ];
points.sort(function(a, b){return a - b}); # [ 1, 5, 10, 25, 40, 100 ] # numerical sort

const points = [ 40, 100, 1, 5, 25, 10 ];
points.sort(function(a, b){return b - a}); # [ 100, 40, 25, 10, 5, 1 ] # numerical sort
# Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

# SAME AS ABOVE BUT CUSTOM SORTING FUNCTION
points.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
};);

# Sorting objects based on property (YEAR)
const books = [
  { title: "Book A", year: 2010 },
  { title: "Book B", year: 2005 },
  { title: "Book C", year: 2018 },
];
const booksSortedByYearAsc = books.sort((a, b) => a.year - b.year);

# Sorting based on the content of the string
const names = ["Mike Smith", "Dr. Johnson", "John Doe", "Dr. Williams"];
names.sort((a, b) => {
  if (a.startsWith("Dr.") && !b.startsWith("Dr.")) {
    return -1; # Drs will come before
  } else if (!a.startsWith("Dr.") && b.startsWith("Dr.")) {
    return 1; # others will go back
  } else {
    return a.localeCompare(b); # Else sort alphabetically
  }
});

# Sorting Strings of Numbers and Letters
const items = ["b", "3", "a", "2", "c", "1"];

items.sort((a, b) => {
  const aIsNumber = !isNaN(a); # isNaN = is Not a Number
  const bIsNumber = !isNaN(b);

  if (aIsNumber && !bIsNumber) {
    return -1; # numbers should be sorted before letters (don't change)
  } else if (!aIsNumber && bIsNumber) {
    return 1; # letters should be sorted after numbers (change)
  } else if (aIsNumber && bIsNumber) {
    return a - b; # sort numbers numerically
  } else {
    return a.localeCompare(b); # sort letters alphabetically
  }
});

# Sorting an Array in Random Order
const points = [ 40, 100, 1, 5, 25, 10 ]; # ramdom will give number bw 0 to 1
# not accurate as it will favor some numbers over others.
points.sort(function(){return 0.5 - Math.random()});

# Find the Lowest (or Highest) Array Value
# 1. sort and then give first or last value for ascending and descending [AVOID AS IT WILL FIRST SORT ALL ARRAY THEN FIND IT]

# For min and max value in array [USE THIS OR write custom function for it]
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
```

- Array Iteration Methods

```bash

# ---------------> map, filter, reduce, foreach,..
# --> some(), every(), include(),
const arr = [1, 2, 3, 4, 5];

# forEach will not return the result after doing any operation init
# TAKES 3 ARGUMENTS map(value, index, array)
const for1 = arr.forEach((i) => i * 0); # ANSWERS ARE WRITTEN BELOW BUT FIRST GUESS THEM
const for2 = arr.forEach((i) => i * 1);
const for3 = arr.forEach((i) => i * 2);
const for4 = arr.forEach((i) => i % 2 === 0);

# map will return the result after doing any operation init "without changing original array"
# create a new array + will do operation on every element and then return that new element
# TAKES 3 ARGUMENTS map(value, index, array)
const map1 = arr.map((i) => i * 0);
const map2 = arr.map((i) => i * 1);
const map3 = arr.map((i) => i * 2);
const map4 = arr.map((i) => i % 2 === 0);

## This method returns all the elements of the array that satisfy the condition specified in the callback function.
# Filter will evaluate every element and will return same element if it returns true
# CHECK MAP VALUES IF TRUE THEN WILL RETURN THE ORIGINAL VALUE ELSE WON'T EG.. [ 0, 0, 0, 0, 0 ] THIS WILL RETURN [] (EMPTY ARRAY) 2.. [ false, true, false, true, false ] RETURN [  2, 4 ]
# TAKES 3 ARGUMENTS filter(value, index, array)
const fil1 = arr.filter((i) => i * 0);
const fil2 = arr.filter((i) => i * 1);
const fil3 = arr.filter((i) => i * 2);
const fil4 = arr.filter((i) => i % 2 === 0);

# Its a wrong way to write reduce -> BELOW GIVEN TRUE WAY TO WORK WITH REDUCE
# TAKES 4 ARGUMENTS reduce(previousValue/totalValue, currentValue, currentIndex, array)
const red1 = arr.reduce((i) => i * 0); # As all element will return false
const red2 = arr.reduce((i) => i * 1);
const red3 = arr.reduce((i) => i * 2); # every element will be double starting from 1st element
const red4 = arr.reduce((i) => i % 2 === 0); # A??? if %6 then why returning true

console.log({ for1 }); # undefined
console.log({ for2 }); # undefined
console.log({ for3 }); # undefined
console.log({ for4 }); # undefined
console.log({ map1 }); # [ 0, 0, 0, 0, 0 ]
console.log({ map2 }); # [ 1, 2, 3, 4, 5 ]
console.log({ map3 }); # [ 2, 4, 6, 8, 10 ]
console.log({ map4 }); # [ false, true, false, true, false ]
console.log({ fil1 }); # []
console.log({ fil2 }); # [ 1, 2, 3, 4, 5 ]
console.log({ fil3 }); # [ 1, 2, 3, 4, 5 ]
console.log({ fil4 }); # [ 2, 4 ] }
console.log({ red1 }); # 0 (0 * 0 * 0 * 0 ) [(1*0)*0*0*0] - as only one parameter(ie totalVal)
console.log({ red2 }); # 1 (1 * 1 * 1 * 1 ) [(1*1)*1*1*1] - as 1 is the first element
console.log({ red3 }); # 16 (2 * 2 * 2 * 2 ) - as if no initial value is provided (so 1 value)
console.log({ red4 }); # true - as (false(0) / 2 === 0); = true &-> (true / 2 === 0); = false

const arr4 = [1, 2, [3, [4, 5, [6, 7]]]] ; # array has 3 sub-arrays
console.log(arr4.flatMap((element) => element).flat(2)) ; # [1, 2, 3, 4, 5, 6, 7]

const numbers = [45, 4, 9, 16, 25];
# without initial value
let sum = numbers.reduce((total, value, index, array) => {
  return total + value; # 99 // [49,58,74,99]
});
# with initial value
let sum = numbers.reduce((total, value, index, array) => {
  return total + value; # 100 // [1,49,58,74,99]
}, 1);
# with initial value #==> reduceRight : IF 1ST VALUE IS STRING THEN THE VALUE IS DIFF
let sum = numbers.reduceRight((total, value, index, array) => {
  return total + value; # 100 # Same as right but it start from right
}, 1);
# To reverse an array without changing the orginal array
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.reduce((accumulator, value) => {
  return [value, ...accumulator];
}, []);
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]


# The every() method checks if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let result = numbers.every((value, index, array) => {
  return value > 18;
  # false as all are not greater than 18(AS ALL VALUES ARE NOT RETURNING TRUE)
});

# The some() method checks if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let result = numbers.some((value, index, array) => {
  return value > 18;
  # true as some are greater than 18(AS SOME VALUES ARE RETURNING TRUE)
});
});

# returns an Array object from any object with a length property or any iterable object
Array.from("ABCD"); # [ 'A', 'B', 'C', 'D' ]

# You can map the array values without using the map method by just using the from method of Array.
const countries = [
  { name: "India", capital: "Delhi" },
  { name: "US", capital: "Washington" },
  { name: "Russia", capital: "Moscow" },
  { name: "Singapore", capital: "Singapore" },
  { name: "China", capital: "Beijing" },
  { name: "France", capital: "Paris" },
];
const cityNames = Array.from(countries, ({ capital }) => capital);
console.log(cityNames); # ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']


# The Array.keys() method returns an Array Iterator object with the keys of an array.
# The entries() method returns an Array Iterator object with key/value pairs:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let x of fruits) {
  console.log(x); # Banana, Orange, Apple, Mango
}

console.log(fruits.keys()); #Object [Array Iterator] {}

for (let x of fruits.keys()) {
  console.log(x); # 0,1,2,3
}

console.log(fruits.values()); #Object [Array Iterator] {}

for (let x of fruits.values()) {
  console.log(x); # Banana, Orange, Apple, Mango
}

for (let x of fruits.entries()) {
  console.log(x); # [ 0, 'Banana' ],[ 1, 'Orange' ],[ 2, 'Apple' ],[ 3, 'Mango' ]
}

# JS Array Spread (...) operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];
const year = [ ...q1, ...q2, ...q3, ...q4];
# ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Nov', 'May']
```

- JavaScript Date Objects

```bash
# Date objects are static. The "clock" is not "running".
# The computer clock is ticking, date objects are not.

# There are 9 ways to create a new date object:
new Date()
new Date(date string) # string ("12-12-12")
new Date(year,month) # number (2000,12)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds) # number (290498502)

#(YYYY-MM-DD)
const d = new Date(); # give current date #Sat Jun 22 2024 15:54:58 GMT+0530 (IST)
const d = new Date("2015-03-25"); # give this date # Fri Mar 25 2022 05:30:00 GMT+0530 (IST)
const d = new Date("03/25/2015"); # adds 0 in tens else may cause errors
#const d = new Date("25-03-2015"); # ERROR => THIS CAN CAUSE ERROR
const d = new Date("2015-03");
const d = new Date("2015");
const d = new Date("October 13, 2014 11:13:00");
# Long dates are most often written with a "MMM DD YYYY" syntax like this:
# And, month can be written in full (January), or abbreviated (Jan):
# Commas are ignored. Names are case insensitive:
const d = new Date("25 Jan 2015"); # Month and day can be in any order:
const d = new Date("Jan 25 2015");
const d = new Date("January 25 2015");
const d = new Date("JANUARY, 25, 2015");

# You cannot omit month. If you supply write only one parameter it will be treated as milliseconds.
const d = new Date(2018); # THIS WILL BE TREATED AS MILISECOND
const d = new Date(2018, 11);
const d = new Date(2018, 11, 24);
const d = new Date(2018, 11, 24, 10);
const d = new Date(2018, 11, 24, 10, 33);
const d = new Date(2018, 11, 24, 10, 33, 30);
const d = new Date(2018, 11, 24, 10, 33, 30, 0);

# JavaScript counts months from 0 to 11:
# Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
const d = new Date(2018, 15, 24, 10, 33, 30); # Fri Dec 24 1909
const d = new Date(2019, 3, 24, 10, 33, 30); # Fri Dec 24 1909

# Specifying a day higher than max, will not result in an error but add the overflow to the next month:

# One and two digit years will be interpreted as 19xx:
const d = new Date(99, 11, 24); # Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)
const d = new Date(9, 11, 24); # Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)

# JavaScript stores dates as number of milliseconds since January 01, 1970.
# One day (24 hours) is 86 400 000 milliseconds.

const d = new Date(0); # 1970-01-01T00:00:00.000Z
const d = new Date(24 * 60 * 60 * 1000); # 1 day added # 1970-01-02T00:00:00.000Z
const d = new Date(86400000); # same as above  # 1 day added
# To go back a day
const d = new Date(-86400000); # Go back one day # 1969-12-31T00:00:00.000Z

# Displaying Dates
new Date().toString() # Sat Jun 22 2024 16:47:57 GMT+0530 (India Standard Time)
new Date().toDateString() # Sat Jun 22 2024
new Date().toUTCString() # Sat, 22 Jun 2024 11:19:41 GMT
new Date().toISOString() # 2024-06-22T11:19:41.416Z
new Date().toLocaleDateString() # 6/22/2024
new Date().toLocaleTimeString() # 4:51:29 PM
# REVISE
let msec = Date.parse("March 21, 2012"); # 1332268200000 # To convert date to millisecond
let date = new Date(86400000); # To convert millisecond into date
```

- Date Get Methods

```bash
const d = new Date();
d.getFullYear(); # 2024
d.getMonth()+1; # 6 (0-11) # can create an array and use this to get month
d.getDate(); # 22 (1-31)
d.getHours(); # 17 (0-23)
d.getMinutes(); # 19 (0-59)
d.getSeconds(); # 55 (0-59)
d.getMilliseconds(); #  493 (0-999)
d.getDay(); # 6 (0-6) # starting from sun (can create an array and use this to get day)
d.getTime(); # 1719057456184 # It returns milliseconds since January 1, 1970
Date.now(); # 1719057456184 # It returns milliseconds since January 1, 1970 [SAME AS ABOVE]

new Date("1969-01-01").getTime() # -31536000000
new Date("1970-01-01").getTime() # 0
new Date("1971-01-01").getTime() # 31536000000

d.getTimezoneOffset(); # -330 (-5.5 hrs) # difference (in min) between local time an UTC time

```

- JavaScript Set Date Methods (To set (change) the date value)

```bash
const d = new Date();
d.setFullYear(2020);
d.setFullYear(2020, 11, 3);
d.setMonth(11); # month changed to dec (0-11)
d.setDate(15); # (1-31)
d.setDate( d.getDate() + 50);  # date is 50 day ahead
d.setHours(22); #  (0-23)
d.setMinutes(30); # (0-59)
d.setSeconds(30); # (0-59)

const today = new Date();
const someday = new Date("2222-05-05");
someday > today # true # You can compate the dates directly

```

- JavaScript Math Object
- Unlike other objects, the Math object has no constructor. The Math object is static.
- All methods and properties can be used without creating a Math object first.

```bash

- Math Properties (Constants)

# JavaScript provides 8 mathematical constants that can be accessed as Math properties:
Math.E        # returns Euler's number
Math.PI       # returns PI
Math.SQRT2    # returns the square root of 2
Math.SQRT1_2  # returns the square root of 1/2
Math.LN2      # returns the natural logarithm of 2
Math.LN10     # returns the natural logarithm of 10
Math.LOG2E    # returns base 2 logarithm of E
Math.LOG10E   # returns base 10 logarithm of E

- Math Methods

# Math.round(x) returns the nearest integer
# Math.round => round to the nearest integer(9.4999=9;9.50=10)
Math.round(4.6); # 5
Math.round(4.5); # 5
Math.round(4.4); # 4

# Math.ceil(x) returns the value of x rounded up to its nearest integer
# Math.ceil => If have integer then give next number(56.999=57;56.0001=57) // [floor+1]
Math.ceil(-4.1); # -4
Math.ceil(-4.9); # -4
Math.ceil(4.1); # 5
Math.ceil(4.9); # 5

# Math.floor(x) returns the value of x rounded down to its nearest integer
# Math.floor => remove the float points and convert into integer(56.999=56;56.0001=56)
Math.floor(-4.1); # -5
Math.floor(-4.9); # -5
Math.floor(4.1); # 4
Math.floor(4.9); # 4

# Math.trunc(x) returns the integer part of x
Math.trunc(-4.1); # -4
Math.trunc(-4.9); # -4
Math.trunc(4.1); # 4
Math.trunc(4.9); # 4

# Math.sign(x) returns if x is negative, null or positive
Math.sign(-4.312) # -1
Math.sign(0) # 0
Math.sign(434.312) # 1

Math.pow(8, 2); # 64 # Math.pow(x, y) returns the value of x to the power of y
Math.sqrt(64); # 8 # Math.sqrt(x) returns the square root of x
Math.abs(-4.7); # 4.7 # Math.abs(x) returns the absolute (positive) value of x
Math.sin(x)
Math.cos(x)

# Math.min() and Math.max() used to find the lowest or highest value in a list of arguments
Math.min( 0, 150, 30, 20, -8, -200); # -200
Math.max( 0, 150, 30, 20, -8, -200); # 150

Math.log(1); # 0 # log1 is always "0"
Math.log(8); # 2.0794415416798357
Math.log2(8); # 3
Math.log10(1000); # 3

Math.random(); # 0.3083259775841265 # random number between 0 (inclusive), and 1 (exclusive)
Math.floor( Math.random() * 10 ); # Returns a random integer from 0 to 9
Math.floor( Math.random() * 10) + 1; # Returns a random integer from 1 to 10

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
getRndInteger(5, 10) # get random number from 5 to 10 [5,6,7,8,9,10]

```

- JavaScript Booleans

```bash

# Values that return true
let x = 100;
let x = 3.14;
let x = -15;
let x = "Hello";
let x = "false";
let x = 7 + 1 + 3.14;
Boolean(x); # return true

# Values that return false
let x = 0;
let x = -0;
let x = "";
let x; # ie. undefined
let x = null;
let x = false;
let x = 10 / "Hallo"; # ie NaN
Boolean(x); # return false

# both are not equal by type(===) only equal by value(==)
let x = false;
let y = new Boolean(false); # Do not create Boolean objects.

# Comparison Operators

let x = 5;

x == 8   # false # equal to (equal value)
x == 5   # true
x == "5" # true

x === 5	  # true # equal value and equal type
x === "5" #	false

x != 8	# true # not equal

x !== 5	  # false # not equal value or not equal type
x !== "5" # true
x !== 8	  # true

x > 8	# false # greater than
x < 8	# true # less than
x >= 8	# false # greater than or equal to
x <= 8	# true # less than or equal to

let x = 6, y = 3;

(x < 10 && y > 1) # true # and
(x == 5 || y == 5) # false # or
!(x == y) # true # not

# Conditional (Ternary) Operator
# variablename = (condition) ? value1:value2

# When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
"2" < "12" # false
2 < 12 # true

# The ?? operator returns the first argument if it is not nullish (null or undefined).
null ?? undefined ?? 0 ?? text # 0 will be printed

# The Optional Chaining Operator (?.)
car?.name # If value is undefined it won't throw an error

10 == [[[[[10]]]]]                                        # returns true
# 10 === Number([10].valueOf().toString()); // 10

```

- Conditional Statements (if, if-else, if-else if, switch)
- The JavaScript Switch Statement

```bash
# If not writing break statement then if case matched, it will execute all cases below it until break is found or block is completed
# You can write default case anywhere in the block, BUT IF IT'S NOT AT LAST THEN WRITE BREAK AFTER IT.

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend"; # NO BREAK STATEMENT AFTER IT
}

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break; # NEED TO WRITE BREAK STATEMENT
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

# Common Code Blocks
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

# If multiple cases matches a case value, the first case is selected.
# If no matching cases are found, the program continues to the default label.
# If no default label is found, the program continues to the statement(s) after the switch.

# Switch cases use strict comparison (===).
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found"; # This will be executed
}
```

- Different Kinds of Loops

```bash
# for - loops through a block of code a number of times
# for/in - loops through the properties of an object
# for/of - loops through the values of an iterable object
# while - loops through a block of code while a specified condition is true
# do/while - Same as while but will run the code atleast ones

# Expression 1 [OPTIONAL] - (let i = 0;)

# Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
# You can initiate many values in expression 1 (separated by comma)
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
} # HERE LEN IS NOT DEFINED EARLY AS LEN IS NOT REQUIRED OUTSIDE IF THE BLOCK, WE DON'T WRITE DIRECTLY I < CARS.LENGTH AS IT WILL CALCULATE LEN ON EVERY ITERATION.S

# you can omit expression 1 (like when your values are set before the loop starts):

# Expression 2 [OPTIONAL] - (i < len;)

# Often expression 2 is used to evaluate the condition of the initial variable
# If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
# If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.

# Expression 3 [OPTIONAL] - (i++)

# Often expression 3 increments the value of the initial variable.
# Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
# Expression 3 can also be omitted (like when you increment your values inside the loop):

# FOR LOOP WITHOUT ANY EXPRESSION (1, 2, 3)
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let len = cars.length;
let text = "";
for (;;) {
  text += cars[i] + " ";
  console.log(text);
  i++;
  if (!(i < len)) break;
}

# FLOW: EXPRESS -> 1,2,CODE,3,2,CODE,3,2,CODE,3,2,....
# 1: INITIALIZE, 2: CHECK, 3: INCRESE

```

- The For In Loop in JS
- THE JAVASCRIPT FOR IN STATEMENT LOOPS THROUGH THE PROPERTIES OF AN OBJECT

```bash

# THE JAVASCRIPT FOR IN STATEMENT LOOPS THROUGH THE PROPERTIES OF AN OBJECT

# Each iteration returns the value of the key ie. person[x], cars[x]
const person = { fname: "John", lname: "Doe", age: 25 };
let text1 = "";
for (let x in person) {
  text1 += person[x] + " "; # John Doe 25
}

# DO NOT USE FOR IN OVER AN ARRAY IF THE INDEX ORDER IS IMPORTANT.
# THE INDEX ORDER IS IMPLEMENTATION-DEPENDENT, AND ARRAY VALUES MAY NOT BE ACCESSED IN THE ORDER YOU EXPECT.
# USE FOR LOOP, FOR OF LOOP, OR ARRAY.FOREACH() WHEN THE ORDER IS IMPORTANT.

# AVOID ARRAY for FOR-IN LOOP [USE FOR-OF LOOP]
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text2 = "";
for (let x in cars) {
  text2 += cars[x] + " "; # BMW Volvo Saab Ford
}

```

- The For Of Loop in JS
- THE JAVASCRIPT FOR OF STATEMENT LOOPS THROUGH THE VALUES OF AN ITERABLE OBJECT.
- It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

```bash

const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + " "; # BMW Volvo Mini
}
const cars = "ABCDEFGH";
let text = "";
for (let x of cars) {
  text += x + " "; # A B C D E F G H
}

```

- While and do-while loop

```bash
while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

# Here when cars[i] will become undefined then while loop will be false and removed
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

# YOU CAN USE THIS TRICK "cars[i]" IN THE FOR LOOP ALSO
while (cars[i]) {
  text += cars[i];
  i++;
}
```

- JavaScript Break and Continue

- The break statement "jumps out" of a loop.
- The continue statement "jumps over" one iteration in the loop.

-

- Label Statement

- The Label Statement is used with the break and continue statements and serves to identify the statement to which the break and continue statements apply.

```bash
# Without the use of a labeled statement the break statement can only break out of a loop or a switch statement. Using a labeled statement allows break to jump out of any code block.

foo: { # without foo the break statement will give an error
  console.log("This prints:");
  break foo;
  console.log("This will never be printed.");
}
console.log("Because execution jumps to here!")


# without labeled statement, when j==i inner loop jumps to next iteration
for (let i = 0; i < 3; i++) {
  console.log("i=" + i);
  for (let j = 0; j < 3; j++) {
    if (j === i) {
      continue;
    }
    console.log("j=" + j);
  }
} # i=0, j=1, j=2, i=1, j=0, j=2, i=2, j=0, j=1, (note j=0, j=2, j=3 is missing)

# using a labeled statement we can jump to the outer (i) loop instead
outer: for (let i = 0; i < 3; i++) {
  console.log("i=" + i);
  for (let j = 0; j < 3; j++) {
    if (j === i) {
      continue outer;
    }
    console.log("j=" + j);
  }
} # i=0, i=1, j=0, i=2, j=0, j=1, (note j=0, j=2, j=3, j=1, j=2, j=2, is missing)

# EXAMPLE
# --> WILL GIVE ERROR
const arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  if (val % 2 === 0) {
     break; # ERROR AS BREAK CAN ONLY WORKS INSIDE A LOOP AND IN FOREACH IT'S INSIDE FUNCTION
  }
  console.log(val);
});

# --> WILL WORK
for (let i = 0, len = arr.length; i < len; i++) {
  if (arr[i] % 2 === 0) {
    break; # THIS WILL WORK AS BREAK IS INSIDE A LOOP
  }
  console.log(arr[i]);
}

```

- JavaScript Iterables

- Iterables are iterable objects (like Arrays).
- Iterables can be iterated over with for..of loops

- An object becomes an iterator when it implements a next() method.
- The next() method must return an object with two properties:
  - value (the next value) - (Can be omitted if done is true)
  - done (true or false) - (true if the iterator has completed false if the iterator has produced a new value)
- Technically, iterables must implement the Symbol.iterator method.

```bash

# Create an Object
myNumbers = {};

# Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    # next() method is returning a object with 2 properties(value and done)
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
# Now you can use for..of

```

- JavaScript Sets
- unique values + only occur once + can be of any type + primitive values or objects.

```bash
# Create a Set --- Pass an array to the new Set() constructor:
const letters = new Set(["a","b","c"]);

# Add Values to the Set
letters.add("c"); # This won't be added as already present
letters.add("C"); # This will be added as capital C
letters.add("d"); # added
const val = "e";
letters.add(val); # added
console.log(letters); # Set(6) { 'a', 'b', 'c', 'C', 'd', 'e' }
# Listing Set Elements
for (const x of letters) {
  console.log(x); # 'a', 'b', 'c', 'C', 'd', 'e'
}

typeof letters;          # Returns object
letters instanceof Set;  # Returns true

letters.has("d"); # true # return true if it exists in the set

letters.forEach((v) => console.log(v)); #forEach method

# The values() method returns an Iterator object with the values in a Set
for (const x of letters.values()) {
  console.log(x); # 'a', 'b', 'c', 'C', 'd', 'e' # ?????? Looking same as above
}

# The keys() method returns an Iterator object with the values in a Set - [SAME AS ABOVE]
# A Set has no keys, so keys() returns the same as values() To makes it compatible with Maps.
for (const x of letters.keys()) {
  console.log(x); # 'a', 'b', 'c', 'C', 'd', 'e' # SAME AS ABOVE
}

# The entries() method returns an Iterator with [value,value] pairs from a Set.
# The entries() method is supposed to return a [key,value] pair from an object.
# A Set has no keys, so the entries() method returns [value,value].
# This makes Sets compatible with Maps.
for (const x of letters.entries()) {
  console.log(x);
} # [ 'a', 'a' ], [ 'b', 'b' ],...,[ 'e', 'e' ]
```

- JavaScript Maps

- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys. [WHICH VALUE INSERTED 1ST]
- Keys are unique ?[YES]
- Maps accept any data type as a key, and do not allow duplicate key values.
- If duplicate key then the latest/last value is considered (in both map and object)

  Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases:

      - The keys of an Object can be Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive type.
      - The keys in a Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in the order of insertion.
      - You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
      - A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
      - An Object has a prototype, so there are default keys in an object that could collide with your keys if you're not careful. As of ES5 this can be bypassed by creating an object(which can be called a map) using Object.create(null), but this practice is seldom done.
      - A Map may perform better in scenarios involving frequent addition and removal of key pairs.

```bash
# Create a Map
const fruits = new Map([ ["apples", 500],["bananas", 300],["oranges", 200] ]);

# You can add elements to a Map with the set() method
fruits.set("mangos", 800);
# change existing Map values using set() method
fruits.set("apples", 300);
# gets the value of a key in a Map using get() method
fruits.get("apples");    # Returns 500

typeof fruits; # Returns object
fruits instanceof Map; # Returns true

fruits.size; # 4 # return the total size of map object

fruits.clear(); # The clear() method removes all the elements from a map

fruits.delete("apples"); # The delete() method removes a map element

fruits.has("apples"); # true if exists in fruits map else false

# The forEach() method invokes a callback for each key/value pair in a map
# forEach(value,key,array) (500, apples, { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 })
fruits.forEach((x, y) => console.log(x, y)); # x is values and y is keys

for (const x of fruits) {
  console.log(x); # [ 'apples', 300 ], [ 'bananas', 300 ],..
}

for (const x of fruits.keys()) {
  console.log(x); # apples, bananas,..
}

for (const x of fruits.values()) {
  console.log(x); # 400,300,200,..
}

for (const x of fruits.entries()) {
  console.log(x); # [ 'apples', 300 ], [ 'bananas', 300 ],..
}

# Objects as Keys -[CREATE A MAP FROM OBJECT]- THEN YOU CAN'T USE .GET METHOD ON IT

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

# object is key
for (const x of fruits.entries()) {
  console.log(x); # [ { name: 'Apples' }, 500 ],[ { name: 'Bananas' }, 300 ],..
}

# cannot get if you are converting from object
fruits.get("apples");             # Returns undefined
fruits.get({ name: "Apples" });   # Returns undefined
# REVISE
```

- The typeof Operator
- The typeof operator returns the data type of a JavaScript variable.
- JavaScript has 7 primitive data types and one complex data type: object

```bash
typeof "John"                                 # Returns string
typeof ("John"+"Doe")                         # Returns string
typeof 3.14                                   # Returns number
typeof 33                                     # Returns number
typeof (33 + 66)                              # Returns number
typeof true                                   # Returns boolean
typeof false                                  # Returns boolean
typeof 1234n                                  # Returns bigint
typeof Symbol()                               # Returns symbol
typeof x                                      # Returns undefined
typeof null                                   # Returns object # null is a primitive value, but returns "object".

# All other complex types like arrays, functions, sets, & maps are different types of objects.
# The typeof operator returns only two types: > object and > function
typeof {name:'John'}                          # Returns object
typeof [1,2,3,4]                              # Returns object
typeof new Map()                              # Returns object
typeof new Set()                              # Returns object
typeof function (){}                          # Returns function

# How to Recognize an Array
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits); # true
arr instanceof Array # true

------- # The instanceof Operator

# The instanceof operator returns true if an object is an instance of a specified object type
# YOU CANNOT GET INSTANCEOF NULL AND UNDEFINED AS THEY ARE NOT OBJECT
const car = null;
car instanceof null; # ERROR
const car = undefined;
car instanceof undefined; # ERROR

# Create a Date
const time = new Date();
(time instanceof Date); # returns true

# Create an Array
const fruits = ["apples", "bananas", "oranges"];
(fruits instanceof Array); # returns true

# Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
(fruits instanceof Map); # returns true

# Create a Set
const fruits = new Set(["apples", "bananas", "oranges"]);
(fruits instanceof Set); # returns true

----- # Undefined Variables

typeof car; # undefined # without defining any variable it will be undefined

let car;
typeof car; # undefined # if defined but not given any value then also undefined

let car = undefined;
typeof car; # undefined # if value is undefined then also type will be undefined

----------- # Null
# You can empty an object by setting it to null. The data type of null is an object.
let car = null;
typeof car; # object

# Create an Object
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

person = null; # Now value is null, but type is still an object
person = undefined; # Now both value and type is undefined

typeof undefined      # undefined
typeof null           # object # and not null
# REVISE
null === undefined    # false
null == undefined     # true OOOOOOOOO BOTH ARE EQUAL HERE OOOOOOOOOO

---------------------- TLDR

typeof "John"                                 # Returns "string"
typeof ("John"+"Doe")                         # Returns "string"
typeof 3.14                                   # Returns "number"
typeof (33 + 66)                              # Returns "number"
typeof NaN                                    # Returns "number" # NaN is a number
typeof 1234n                                  # Returns "bigint"
typeof true                                   # Returns "boolean"
typeof false                                  # Returns "boolean"
typeof {name:'John'}                          # Returns "object"
typeof [1,2,3,4]                              # Returns "object"
typeof {}                                     # Returns "object"
typeof []                                     # Returns "object"
typeof new Object()                           # Returns "object"
typeof new Array()                            # Returns "object"
typeof new Date()                             # Returns "object"
typeof new Set()                              # Returns "object"
typeof new Map()                              # Returns "object"
typeof function () {}                         # Returns "function"
typeof x                                      # Returns "undefined"
typeof null                                   # Returns "object" # It's an object and not null
```

- JavaScript Type Conversion

```bash
1.----- Converting Strings to Numbers
- Number(), parseFloat(), parseInt(), +

Number("3.14")                            # 3.14
Number(Math.PI)                           # 3.141592653589793
Number("    ")                            # 0
Number("")                                # 0
Number("  10  ")                          # 10
Number("99 88")                           # NaN # it's NaN and not 99 # use parseInt()
Number("John")                            # NaN

+"3.14"                                   # 3.14
+Math.PI                                  # 3.141592653589793
+"    "                                   # 0
+""                                       # 0
+"  10  "                                 # 10
+"99 88"                                  # NaN # it's NaN and not 99 # use parseInt() maybe
+"John"                                   # NaN

2.----- Converting Numbers to Strings

let x = 43;
String(x);
String(123);
String(100 + 23);
# same as above
x.toString();
(123).toString();
(100 + 23).toString();

3.----- Converting Dates to Numbers

d = new Date();
Number(d)    # returns 1404568027739
d.getTime()  # returns 1404568027739

4.----- Converting Dates to Strings

String(Date())
Date().toString()
# get methods also convert dates into strings (eg. getFullYear(), getDay(),..)

5.----- Converting Booleans to Numbers

Number(false)                               # returns 0
Number(true)                                # returns 1

6.----- Converting Booleans to Strings

String(false)                               # returns "false"
String(true)                                # returns "true"
String(null)                                # returns "null"
false.toString()                            # returns "false"
true.toString()                             # returns "true"

7.----- Automatic Type Conversion

5 + null                  # returns 5         # because null is converted to 0
"5" + null                # returns "5null"   # because null is converted to "null"
"b" + 2                   # returns "b2"      # because b is converted to "b"
"5" + 2                   # returns "52"      # because 2 is converted to "2"
"5" - 2                   # returns 3         # because "5" is converted to 5
"5" * "2"                 # returns 10        # because "5" and "2" are converted to 5 and 2
"5" * "a"                 # returns NaN       # because alphabets can't be converted to number

8.----- Automatic String Conversion

# When tries to get an output to DOM (document.getElementById("demo").innerHTML = myVar;)

myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
# Numbers and booleans are also converted, but they are not very visible
myVar = 123             // toString converts to "123"
myVar = true            // toString converts to "true"
myVar = false           // toString converts to "false"

myVar.toString()

# REVISE
9.----- JavaScript Type Conversion Table
---- https://www.w3schools.com/js/js_type_conversion.asp ---> Go and check [for full table]
# TLDR
console.log(Boolean("0"));                                     # true
console.log(Boolean(0));                                       # false
console.log(Boolean(NaN));                                     # false
console.log(Boolean("NaN"));                                   # true
console.log(Boolean(Infinity));                                # true
console.log(Boolean(""));                                      # false # empty string is false
console.log(Number(""));                                       # 0
console.log(Boolean([]));                                      # true # empty array is true
console.log(Boolean({}));                                      # true # empty object is true
console.log(Number([]));                                       # 0
console.log(Number({}));                                       # NaN
console.log(String([]));                                       # ""
console.log(String({}));                                       # "[object Object]"
console.log(Number([20]));                                     # 20
console.log(Number(null));                                     # 0 # null is 0
console.log(Number(undefined));                                # NaN # undefined is NaN
console.log(Boolean(null));                                    # false
console.log(Boolean(undefined));                               # false
console.log(isNaN(1));                                         # false
console.log(isNaN("1"));                                       # false
console.log(isNaN("1a"));                                      # true
console.log(isNaN("1 3"));                                     # true
# NEW ADDED
console.log("0" == false);                                     # true
console.log([[[[0]]]] == false); # ([[0]].valueOf().toString())# true
console.log(0 == false);                                       # true
console.log(0 === false);                                      # false
console.log("0" === false);                                    # false
console.log(NaN === NaN);

# The variables such as objects, arrays and functions comes under pass by reference
# so comparing them will always returns false
{} === {}, [] === []
```

- JavaScript Destructuring
- Destructuring does not change the original object.

```bash
# Destructuring can be used with any iterables.

# The order of the properties does not matter
# For potentially missing properties we can set default values = [ie. IF UNDEFINED]
1. -------- Object destructuring
# Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  working: null,
  age: undefined,
  city: "Ahmedabad",
};

# Destructuring
let { lastName, firstName = "Mahesh", country = "US", working= "Soon", age = 10, city:town } = person;

console.log(firstName);                         # John # Not Mahesh as firstName value exists
console.log(lastName);                          # Doe
console.log(country);                           # US # As country value doesn't exists
console.log(working);                           # null as null is provided
console.log(age);                               # 10 # if undefined then default value
console.log(city);                              # This will through an error
console.log(town);                              # Ahmedabad # as now the name has been changed

# DESTRUCTURE NESTED OBJECTS
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}
myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}

2. -------- String destructuring

# Create a String
let names = "W3Schools";

# Destructuring
let [ a1, z9, a3, a4, a5] = names;
console.log( a1, z9, a3); # You can use any name

3. -------- Array destructuring

# Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

# Destructuring
let [fruit1, fruit2] = fruits; # Bananas Oranges

# We can skip array values using two or more commas
let [fruit1,,,fruit2] = fruits; # Bananas Mangos

# We can pick up values from specific index locations of an array
let { [0]:fruit1 ,[2]:fruit2 } = fruits; # Bananas Apples # USE CURLY BRACKETS FOR THIS

----- The Rest Property # can also be used in objects (may be for all iterables)

const numbers = [10, 20, 30, 40];
const [ a, b, ...rest ] = numbers;
console.log( a, rest ); # 10 [ 30, 40 ]

4. ------- Destructuring Maps

# Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

# Destructing
for (const [myKey, myValue] of fruits) {
  console.log(myKey, myValue); # apples 500, bananas 300, oranges 200
}

5. ------- Swapping JavaScript Variables

let firstName = "John";
let lastName = "Doe";

# Destructing in variables
[firstName, lastName] = [lastName, firstName];
console.log( firstName, lastName); # Doe John

# BELOW CAN BE DONE BY REGULAR WAYS
[firstName] = [lastName]; #lastName is changed to John (value of first name)
firstName = lastName; # Same as above
console.log( firstName, lastName); # John John
[firstName] = ["myName"]; # firstName changed to myName --->>> Can directly change this
firstName = "myName"; # Same as above
console.log( firstName, lastName); # myName John

```

- JavaScript Bitwise Operators ( NOT GOING DEEP IN THIS TOPIC)

```bash
--------- FOR MORE INFO # https://www.w3schools.com/js/js_bitwise.asp

&	AND
# Sets each bit to 1 if both bits are 1
|	OR
# Sets each bit to 1 if one of two bits is 1
^	XOR
# Sets each bit to 1 if only one of two bits is 1
~	NOT
# Inverts all the bits
>>	Signed right shift
# Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift
# Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
<<	Zero fill left shift
# Shifts left by pushing zeros in from the right and let the leftmost bits fall off
```

- JavaScript Regular Expressions

```bash
Syntax /pattern/modifiers;
# In JavaScript, regular expressions are often used with the two string methods: search() and replace().
1. Modifiers > eg. [ i(case-insensitive matching), g(global match (find all)), m( multiline matching) # {i/g are also working as multiline so this maybe not needed}]

let text = "Visit W3Schools!";
let n = text.search("W3Schools"); # 6 # as it starts from 6th position
# i -> Means find case-insensitive words
let n = text.search(/W3SCHOol/i); # 6

let result = text.replace(/W3Schools/i, "Microsoft"); # It will replace w3 to microsoft
# g -> Global search, finds all instances of the search
let text = "Is this all there is?";
let result = text.match(/is/g); # [ 'is', 'is' ]
let result = text.match(/is/ig); # [ 'Is', 'is', 'is' ]

2. Patterns
    - Brackets are used to find a range of/individual characters # [abc], [a-z], (x|y)
    - Metacharacters are characters with a special meaning # \d \s \b \uxxxx
    - Quantifiers define quantities # n+, n*, n?

# --> Brackets []

# Find all the alphabets in the brackets [abc]
let result = text.match(/[is]/ig); # [ 'I', 's', 'i', 's', 'i', 's' ]

# Find all the alphabets from the range [0-9]
let result = text.match(/[a-h]/gi); # [ 'h', 'a', 'h', 'e', 'e' ]
let text = "123456789";
let result = text.match(/[1-4]/g); # [ '1', '2', '3', '4' ]

# Find any of the alternatives separated with | (x|y) --> Find 1st then seconod
let text = "re, green, red, green, gren, gr, blue, yellow";
let result = text.match(/(gr|green)/g); # [ 'gr', 'gr', 'gr', 'gr' ]
let result = text.match(/(green|gr)/g); # [ 'green', 'green', 'gr', 'gr' ]
let result = text.match(/(green|gr|red)/g); # [ 'green', 'red', 'green', 'gr', 'gr' ]

# --> Metacharacters /x

# \d -> Find a digit
let text = "Give 100%!";
let result = text.match(/\d/g); # [ '1', '0', '0' ]

# \s -> Find a whitespace character
let text = "Is this all there is?";
let result = text.match(/\s/g); # [ ' ', ' ', ' ', ' ' ]

# \b -> Matching the beginning or ending of the word {considers alphanumeric characters only?}
let text = "PLOa #LO2 HELLO(), Wow World?, LOOK AT YOU!";
let result = text.search(/LO\b/); # 13 # after HELLO ignoring parenthesis "()"
let result2 = text.search(/\bLO/); # 6 # before LO2 ignoring hastag "#"

# \uxxxx -> Find the Unicode character specified by the hexadecimal number xxxx
let result = text.match(/\u0057/g); # [ 'W', 'W' ]
let result = text.match(/\u0057/gi); # [ 'W', 'w', 'W' ]

# --> Quantifiers n_
let text = "Hellooo World! Helloo looool! ooooo lol";
# n+ ->  [same],[++infinite (ifSame-lastnumber)] --> Can't be less
let result = text.match(/ooo+/g); # [ 'ooo', 'oooo', 'ooooo' ]
let result = text.match(/loo+/g); # [ 'looo', 'loo', 'loooo' ]
let result = text.match(/(oo)+/g); # [ 'oo', 'oo', 'oooo', 'oooo' ] # oo as single character
# n* -> [same],[-1 (ifSame)],[++infinite (ifSame)]
let result = text.match(/ooo*/g); # [ 'ooo', 'oo', 'oooo', 'ooooo' ]
let result = text.match(/loo*/g); # [ 'looo', 'loo', 'loooo', 'lo' ]
let result = text.match(/(oo)*/g); # [ 'oo', 'oo', 'oooo', 'oooo', " "," ",.. ] + all spaces
# n? -> [same],[-1 (ifSame)] --> Can't be more
let result = text.match(/ooo?/g); # [ 'ooo', 'oo', 'ooo', 'ooo', 'oo' ]
let result = text.match(/loo?/g); # [ 'loo', 'loo', 'loo', 'lo' ]
let result = text.match(/(oo)?/g); # [ 'oo', 'oo', 'oo','oo', 'oo','oo', " ",.. ] + all spaces

 # .test() -> It searches a string for a pattern, and returns true or false
/est/.test("The best things in life are free!"); # true
# SAME AS ABOVE ONE LINE
const pattern = /e/;
const string = "The best things in life are free!"
pattern.test(string); # true

# .exec() -> it searches a string for a specified pattern, and returns an object.
/est/.exec("The best things in life are free!") # [...,index:5,...]
# If not found then returns null
/estasd/.exec("The best things in life are free!") # null
```

- JavaScript Errors
  - The try statement defines a code block to run (to try).
  - The catch statement defines a code block to handle any error.
  - The finally statement defines a code block to run regardless of the result.
  - The throw statement defines a custom error.

```bash

let message = "";
let x = "1";
try {
  if (x.trim() == "") throw "is empty";
  if (isNaN(x)) throw "is not a number";
  x = Number(x);
  if (x > 10) throw "is too high";
  if (x < 5) throw "is too low";
} catch (err) {
  message = "Error: " + err + ".";
  console.log(message);
} finally {
  console.log("Done");
}

# The Error Object - have two properties 1. name and 2. message
1.EvalError---   	  An error has occurred in the eval() function (NOW SyntaxError)
2.RangeError  	    A number "out of range" has occurred
3.ReferenceError 	  An illegal reference has occurred
4.SyntaxError 	    A syntax error has occurred
5.TypeError   	    A type error has occurred
6.URIError    	    An error in encodeURI() has occurred

# 2. RangeError
let num = 1;
try {
  num.toPrecision(500); # A number cannot have 500 significant digits eg 6 (92.6560)
} catch (err) {
  console.log(err.name); # RangeError
}

# 3. ReferenceError
let num = 1;
try {
  x = y + 1; # y cannot be used (referenced)
} catch (err) {
  console.log(err.name); # ReferenceError
}

# 4. SyntaxError
try {
  eval("alert('Hello)"); # Missing ' will produce an error
} catch (err) {
  console.log(err.name); # SyntaxError
}

# 5. TypeError
let x = 1;
try {
  num.toUpperCase(); # You cannot convert a number to upper case
} catch (err) {
  console.log(err.name); # ReferenceError # Should give TypeError
}

# 6. URIError
try {
  decodeURI("%%%");   # You cannot URI decode percent signs
} catch (err) {
  console.log(err.name); # URIError
}

```

- JavaScript Scope
  - Block scope
  - Function scope
  - Global scope
    - Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

```bash
1. Block Scope
# Variables declared inside a { } block cannot be accessed from outside the block -(let,const)
# Variables declared with the var keyword can NOT have block scope.
# EG IF-ELSE / LOOPS
{
  let x = 2;
  var y = 2;
}
// x can NOT be used here but // y CAN be used here

2. Function/Local Scope
# Variables declared within a JavaScript function, are LOCAL to the function
# Variables declared with var, let and const are quite similar when declared inside a function.

# HERE VAR IS NOT ACCESSIBLE OUTSIDE THE FUNCITON
myFunction(); # Function is called
console.log(carName); # ERROR
function myFunction() {
  var carName = "Volvo"; #CANNOT ACCESS OUTSITE JUST LIKE CONST AND LET
}
console.log(carName); # ERROR


3. Global Scope
# A variable declared outside a function, becomes GLOBAL.

4. Automatically Global
# If function scope variable is not declared and is """called after the function call""" then you can access the variable

# Example1:
// console.log(a); # Error
// console.log(b); # Error
// console.log(c); # Error
// console.log(d); # Error

check();
// console.log(a); # Error
// console.log(b); # Error
// console.log(c); # Error
console.log(d); // 4 # We can get the value of b after the function is called

function check() {
  let a = 1;
  const b = 2;
  var c = 3;
  d = 4;
}

5. Global Variables in HTML
# With JavaScript, the global scope is the JavaScript environment.
# In HTML, the global scope is the window object.
# Global variables defined with the var keyword belong to the window object:
Do NOT create global variables unless you intend to.

var carName1 = "Volvo";
let carName2 = "Volvo";
// code here can use window.carName1
// code here can not use window.carName2

# /////////////
for (let a = 0; a < 4; a++) {
  setTimeout(() => console.log(a), 2000);
} # 0,1,2,3

for (var a = 0; a < 4; a++) {
  setTimeout(() => console.log(a), 2000);
} # 4,4,4,4 # It's 4 and not 3 because a++ increase the value of a and then it compares

# ‘var’ is not block scoped but it is function scoped. So if we run the code below:
for (var a = 0; a < 4; a++) {
  (function (a) {
    setTimeout(() => console.log(a), 2000);
  })(a);  # 0,1,2,3 // passing a variable here
}

for (var a = 0; a < 4; a++) {
  (function () {
    var index = a; # can use let or const as inside function block all works similar
    setTimeout(() => console.log(index), 2000);
  })();  # 0,1,2,3 // without passing any variable here
}

# since ‘var’ variables are not block scoped, we did not create a new variable, instead we just re-assigned the existing variable and gave it new value

# If condition is passed, logic is executed inside the for block, in this case closure is created because setTimeout() is a function and it has another function inside it which is referencing outer variable ‘i’, so setTimeout is not actually executed directly, it is sent to WEB API and function inside it remembers reference to variable ‘i’ (not value — but reference)

FOR EXPLAINATION : https://medium.com/@jubomdivnishvili/the-mystery-behind-settimeout-in-loop-var-vs-let-behavior-in-depth-b56468d6a3d6

```

- JavaScript Hoisting
- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

  - In JavaScript, a variable can be declared after it has been used.
  - In other words; a variable can be used before it has been declared.
  - Hoisting applies to variable declarations(eg x=1) and to function declarations(eg function(){}) [and not Function Expressions (eg. const a = function() {})]- [Arrow function is also type of function expression ]
  - class declarations are not hoisted

- TLDR : Only the declaration of var(var x;)[can declare before it is used] is hoisted(moved to top), but initializing/assigning of value(x = 2;) needs to be applied before it is used (else x = undefined)::: (let will give referance error if not declared before and const gives syntex error as we can't reassigne a value)

- Variables defined with let and const are hoisted to the top of the block, but not initialized.
- Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

- To avoid bugs, always declare all variables at the beginning of every scope.

- var:: Variable declaration will be hoisted, initialized as undefined
- let:: Hoisted but not initialized, will give error

```bash

# ----> var
x = 5;
var x; # This will work

# If var is initialize before or assigne before than it will work else give undefined (not error)
var a = 4; # Initialize a
console.log(a, b, c); # 4 undefined undefined
b = 5; # Assign 5 to b
console.log(a, b, c); # 4 5 undefined
var b; # Declare b
var c = 3; # Initialize c # only the declaration (var c), not the initialization (=3) is hoisted to the top. (So undefined)

# ----> let ,const

# Variables defined with let and const are hoisted to the top of the block, but not initialized.
# Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.


# let will give ReferenceError
x = 5; # ReferenceError: Cannot access 'a' before initialization
let x;

# const will give SyntaxError -> As value of const cannot be changed
x = 5;
const x; # SyntaxError (This code will not run)

```

- JavaScript Use Strict

- Normal variables in JavaScript can't be deleted using the delete operator.
- In strict mode, an attempt to delete a variable will throw an error and is not allowed. The delete operator can only delete properties on an object.

```bash
# Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

x = 3.14;       # This will not cause an error.
myFunction();
"use strict"; # After this  undeclared variables will cause error
x = 3.14;       # This will cause an error because x is not declared
function myFunction() {
  y = 3.14;   # This will cause an error
}

#
# Using a variable, without declaring it, is not allowed
x = 3.14;                // This will cause an error
# Using an object, without declaring it, is not allowed
x = {p1:10, p2:20};      // This will cause an error
# Deleting a variable (or object) is not allowed
let x = 3.14;
delete x;                // This will cause an error
# Deleting a function is not allowed.
function x(p1, p2) {};
delete x;                // This will cause an error
# Duplicating a parameter name is not allowed
function x(p1, p1) {};   // This will cause an error
# If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
# +++++++++++++
```

- The JavaScript this Keyword
  - this is not a variable. It is a keyword. You cannot change "this" to some other value/keyword.

```bash
# this in a Method => When used in an object method, this refers to the object.(person object)
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName; # This is the person object
  }
};

# "this" Alone ==> When used alone, this refers to the global object. ( same in strict object)
let x = this; # In a browser window the global object is [object Window]

# "this" in a Function => In a function, the global object is the default binding for this.
function myFunction() {
  return this; # In a browser window the global object is [object Window]:
}

# "this" in a Function (Strict) => JavaScript strict mode does not allow default binding.
"use strict";
function myFunction() {
  return this; # So, when used in a function, in strict mode, this is undefined.
}

# "this" in Event Handlers => In HTML event handlers, this refers to the HTML element that received the event
<button onclick="this.style.display='none'">
  Click to Remove Me! # Will apply to button
</button>

# ====> Explicit Function Binding
# The call() and apply() methods are predefined JavaScript methods.
# They can both be used to call an object method with "another object" as argument.

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe",
}
# this refers to person2, even if fullName is a method of person1
person1.fullName.call(person2); # Return "John Doe":

# ==> Function Borrowing {Full explaination in upcoming section}
# With the bind() method, an object can borrow a method from another object.
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
# The member object borrows the fullname method from the person object
let fullName = person.fullName.bind(member);

```

- JavaScript Arrow Function (lambda expressions)

  - Normal Function:

    - Suitable for methods within objects where "this" needs to refer to the object.
    - Useful when "arguments" object is needed.
    - Can be used as constructors.
    - Can call a function above it is defined

  - Arrow Function:

    - Ideal for callbacks or functions that do not require their own "this" context.
    - More concise syntax, especially for inline functions.
    - Cannot be used as constructors.
    - Can't call a function above it is defined

```bash
hello = () => {
  return "Hello World!";
}
# Arrow Functions Return Value by Default:
hello = () => "Hello World!";

1. this Binding

# ==> normal function:
# The value of this is dynamic and depends on how the function is called.
# Can be used as methods in objects where this refers to the object.
const obj = {
  value: 10,
  method: function () {
    return this.value;
  },
};
console.log(obj.method()); // 10

# ==> arrow function:
# The value of this is lexically bound, meaning it takes this from its surrounding context at the time the function is defined, not at the time it is called.
# Arrow functions are not suitable for methods that require their own this.
const obj = {
  value: 10,
  method: () => {
    return this.value; // "this" here is not "obj", but the enclosing scope when the arrow function was defined.
  },
};
console.log(obj.method()); // undefined (or the value of "this" in the enclosing scope)

2. arguments Object

# ==> normal function:
# Has access to the arguments object which contains all arguments passed to the function.
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6

# ==> arrow function:
const sum = (...args) => {
    return args.reduce((total, current) => total + current, 0);
};
console.log(sum(1, 2, 3)); // 6

3. Constructor

# ==> normal function:
# Can be used as constructors and called with the new keyword to create instances.
function Person(name) {
    this.name = name;
}
const person = new Person('John');
console.log(person.name); // John

# ==> arrow function:
# Cannot be used as constructors. Attempting to use new with an arrow function will result in an error.
const Person = (name) => {
    this.name = name;
};
const person = new Person('John'); # Error: Person is not a constructor
```

- JavaScript Classes

- The Constructor Method
  - It has to have the exact name "constructor"
  - It is executed automatically when a new object is created
  - It is used to initialize object properties
- Class Methods
  - function of that class (for object)

```bash
# A JavaScript class is not an object. It is a template for JavaScript objects.

# If you do not define a constructor method, JavaScript will add an empty constructor method

# creates a class named "Car". it has two initial properties: "name" and "year".
# Created a Class method named "age", that returns the Car age
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  ageAdd(x) { # You can send parameters to Class methods
    return this.age() + x;
  }
}
const myCar = new Car("Ford", 1998); # uses the Car class to create two Car objects
console.log(myCar.age()); # 26
console.log(myCar.ageAdd(5)); # 31

```

- JavaScript Modules
  - Modules only work with the HTTP(s) protocol.
  - A web-page opened via the file:// protocol cannot use import / export.

```bash
1. Export

# ==> Named Exports

# In-line individually:
export const name = "Jesse";
export const age = 40;

# All at once at the bottom:
const name = "Jesse";
const age = 40;
export {name, age}; # Import like this :: import { name, age } from "./person.js";

# ==> Default Exports
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};
export default message; # Import like this :: import message from "./message.js";

2. Import

# Import from named exports
import { name, age } from "./person.js";

# Import from default exports

import message from "./message.js";

```

- JavaScript JSON
  - JSON (JavaScript Object Notation) is a format for storing and transporting data.
  - JSON is language independent
    - [The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.]

```bash
# ==> JSON Syntax Rules
# Data is in name/value pairs
# Data is separated by commas
# Curly braces hold objects
# Square brackets hold arrays

let text = "employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]

# Converting a JSON Text to a JSON -> To use in JS File
const obj = JSON.parse(text);
# When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

# Converting a JSON to a JSON Text --> To transfer over
const obj = JSON.stringify(text);
# When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.
```

- JavaScript Debugging

```bash
# The debugger Keyword is same as Setting Breakpoints (if debugger turned on)

let x = 15 * 5;
debugger; # If the console is opened in browser then the code will stop here
console.log(x);

```

- JavaScript Style Guide

```bash
# Always end a simple statement with a semicolon.
const cars = ["Volvo", "Saab", "Fiat"]; # semicolon
const person = {
  firstName: "John",
  lastName: "Doe",
 };  # semicolon

# Do not end a complex statement with a semicolon.
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
} # no semicolon
for (let i = 0; i < 5; i++) {
  x += i;
} # no semicolon
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} # no semicolon

# PascalCase: => first character of every word is Capital (MyNameIs)
# camelCase: => first character of every word is Capital except first word (myNameIs)

```

- JavaScript Best Practices

```bash
# Avoid global variables, avoid new, avoid ==, avoid eval()
# Always Declare Local Variables
# Declarations on Top
# Initialize Variables :=> It is a good coding practice to initialize variables when you declare them.
# Declare Objects and Arrays with const

# ==> Don't Use new Object()
# Use "" instead of new String()
# Use 0 instead of new Number()
# Use false instead of new Boolean()
# Use {} instead of new Object()
# Use [] instead of new Array()
# Use /()/ instead of new RegExp()
# Use function (){} instead of new Function()

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object

# Beware of Automatic Type Conversions
let x = 5 + 7;                                # x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";                              # x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;                              # x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;                                # x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";                              # x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;                              # x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";                              # x.valueOf() is NaN, typeof x is a number

let x = "Hello" - "Dolly";    // returns NaN and not an error

# Use === Comparison
0 == "";                                                # true
1 == "1";                                               # true
1 == true;                                              # true

0 === "";                                               # false
1 === "1";                                              # false
1 === true;                                             # false

# Use Parameter Defaults
function (a=1, b=1) { /*function code*/ } # If value is not passed


# End Your Switche block with Defaults

# ==> Avoid creating Number, String, and Boolean as Objects
# Declaring these types as objects, slows down execution speed, and produces nasty side effects:
let x = "John";
let y = new String("John");
(x === y) // is false because x is a string and y is an object.

let x = new String("John");
let y = new String("John");
(x == y) // is false because you cannot compare objects.
```

- JavaScript Common Mistakes

```bash
# Accidentally Using the Assignment Operator
let x = 0;
if (x == 10) # false as expected
if (x = 10) # true as 10 value is true (always)
if (x = 0) # false as 0 value is false (always)

# switch statements use strict comparison:
let x = 10;
switch(x) {
  case 10: alert("Hello"); # This will alert
}
switch(x) {
  case "10": alert("Hello"); # This won't alert
}

# ==> Confusing Addition & Concatenation. As both uses + operator
# Addition is about adding numbers.
# Concatenation is about adding strings.
let x = 10;
x += 5; # 15
x += "5"; # 105 # 155

# Misunderstanding Floats
# All programming languages, including JavaScript, have difficulties with precise floating point values:
let x = 0.1;
let y = 0.2;
let z = x + y; # 0.30000000000000004 # the result in z will not be 0.3
let z = (x * 10 + y * 10) / 10; # 0.3       // z will be 0.3

# Breaking a JavaScript String (using \)
let x = "Hello \
World!"; # Hello World!

# Misplacing Semicolon
if (x == 19);
{
  // code block will run everytime
}

# Breaking a Return Statement ==> Never break a return statement.
# If a statement is incomplete JS will try to complete the statement by reading the next line: [eg let]
# But since this statement is complete, JS will automatically close it like this: [eg return]
function myFunction(a) {
  let
  power = 10; # let power = 10; make this
  return # return undefined
  a * power; # This won't be executed
}

# In JavaScript, arrays use numbered indexes: (NOT named indexes.)
const person = [];
person[0] = "John"; # Will add
person["firstName"] = "John"; # Won't add

# JSON does not allow trailing commas.
points = [40, 100, 1, 5,]; # Errror in JSON
points = [40, 100, 1, 5]; # No error

# Undefined is Not Null
let x = null;
let y = undefined;
console.log(typeof x);                                  # object
console.log(typeof y);                                  # undefined
console.log(typeof y === "undefined");                  # true
console.log(x === undefined);                           # false
console.log(x === "undefined");                         # false
console.log(x === null);                                # true -> IT'S TRUE AND NOT FALSE
console.log(x === "null");                              # false

```

- JavaScript Performance

```bash
# ==> Reduce Activity in Loops
for (let i = 0; i < arr.length; i++) { # arr.length will run on every iteration

let l = arr.length; # arr.length will run once
for (let i = 0; i < l; i++) {

# ==> Reduce DOM Access, also Reduce DOM Size
# Accessing the HTML DOM is very slow, compared to other JavaScript statements.
# If you expect to access a DOM element several times, access it once, and use it as a local variable:
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";

# ==>Avoid Unnecessary Variables:  if you don't plan to save values later
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(firstName + " " + lastName);

# ==> Avoid Using "with": It has a negative effect on speed.
# "with" keyword is not allowed in strict mode.
```

- JavaScript Object Definition

- Methods for Defining JavaScript Objects
  - Using an Object Literal
  - Using the new Keyword
  - Using an Object Constructor
  - Using Object.assign()
  - Using Object.create()
  - Using Object.fromEntries()

```bash
1. Using an Object Literal
2. Using the new Keyword

# Create an Object
const person = {}; # object literal is also callled an object initializer.
const person = new Object(); # Use above instead of this

# Add Properties
person.firstName = "John";
person.lastName = "Doe";

3. Using an Object Constructor
#  to create many objects of the same type.

# Create Object Type Person
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = blue;
}
# we can use new Person() to create many new Person objects:
const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

```

- JavaScript Object Prototypes

```bash
# ==> Prototype Inheritance
# -> All JavaScript objects inherit properties and methods from a prototype:
# Date objects inherit from Date.prototype
# Array objects inherit from Array.prototype
# Person objects inherit from Person.prototype

# Adding Properties and Methods to Objects :: Using the prototype Property
# to add new properties (or methods) to all existing objects of a given type. or to an object constructor. BUT Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

```

- JavaScript Object Methods
  - General Methods
  - Property Management Methods
  - Object Protection Methods

1. General Methods

```bash
# Copies properties from a source object to a target object
Object.assign(target, source)

# Creates an object from an existing object
Object.create(object)

# Returns an array of the key/value pairs of an object
Object.entries(object)

# Creates an object from a list of keys/values
Object.fromEntries()

# Returns an array of the keys of an object
Object.keys(object)

# Returns an array of the property values of an object
Object.values(object)

# Groups object elements according to a function
Object.groupBy(object, callback)

1. ==> Object.assign(target, source) # Copies properties from a source object to a target object

# Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
# Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};
# Assign Source to Target
Object.assign(person1, person2); # { firstName: 'Anne', lastName: 'Smith', age: 50, eyeColor: 'blue' } #-> firstName and lastName is replaced in person1

# USE OBJECT.ASSIGN TO CREATE A COPY OF OBJECT BY VALUE INSTEAD OF REFERANCE
#@@@ But be aware this is a shallow copy - nested objects are still copied as reference.
# FOR NESTED/DEEP OBJECTS USE: structuredClone() OR JSON.parse(JSON.stringify(x)) ???
const x = { a: "me", b: "you" };
const y = x; # IT IS COPIED BY REFERANCE
const z = Object.assign( {}, x); # IT IS COPIED BY VALUE
console.log(x, y, z); # { a: 'me', b: 'you' } { a: 'me', b: 'you' } { a: 'me', b: 'you' }
delete x.a;
console.log(x, y, z); # { b: 'you' } { b: 'you' } { a: 'me', b: 'you' }


2. ==> Object.create(object)   # Creates an object from an existing object

function fruits() {
  this.name = "franco";
}
function fun() {
  fruits.call(this);
}

fun.prototype = Object.create(fruits.prototype);
const app = new fun();
console.log(app.name);

3. ==> Object.entries(object)  # Returns an array of the key/value pairs of an object

let text = Object.entries(person1); # [ [ 'firstName', 'John' ],..[ 'eyeColor', 'blue' ] ]

# Object.entries() makes it simple to use objects in loops:
for (let [a, b] of text) {
  console.log( a, b); # firstName John, lastName Doe, age 50, eyeColor blue
}


4. ==> Object.fromEntries()    # Creates an object from a list of keys/values

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];
const myObj = Object.fromEntries(fruits); # { apples: 300, pears: 900, bananas: 500 }


5. ==> Object.keys(object) # Returns an array of the keys of an object

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
let text = Object.keys(person); # [ 'firstName', 'lastName', 'age', 'eyeColor' ]

6. ==> Object.values(object)   # Returns an array of the property values of an object

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
let text = Object.values(person); # [ 'John', 'Doe', 50, 'blue' ]


7. ==> Object.groupBy(object, callback)    # Groups object elements according to a function

# It's new so don't use it #########
// Create an Array
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);

8. JavaScript for...in Loop # to loops through the properties of an object.

const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

for (let x in person) {
  console.log(person[x]); # John, Doe, 25
}

```

2. Property Management Methods -----------

```bash

```

3. Object Protection Methods

```bash

1. => const # Prevents re-assignment

const car = {type:"Fiat", model:"500", color:"white"}; # cannot reassign value to car (car =)


2. => Object.preventExtensions(object) # Prevents adding object properties
# TO STOP ADDING ANY NEW PROPERTY TO OBJECT / ARRAY (as array are also objects)

# OBJECT
const person = {firstName:"John", lastName:"Doe"};
Object.preventExtensions(person); # Prevent Adding new properties to person object
person.nationality = "English"; # This will throw an error

# ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits); # Prevent Adding new elements to fruits array
fruits.push("Kiwi"); # This will throw an error

3. => Object.isExtensible(object) # Returns true if properties can be added to an object

let answer = Object.isExtensible(person); # This will return false (AS PREVENTED ABOVE)
let answer = Object.isExtensible(fruits); # This will return false (AS PREVENTED ABOVE)


4. => Object.seal(object) # Prevents adding and deleting object properties

# OBJECT
const person = {firstName:"John", lastName:"Doe"};
Object.seal(person); # Prevent Adding+Removing new properties to person object
delete person.lastName; # This will throw an error

# ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits); # Prevent Adding+Removing new elements to fruits array
fruits.pop("Kiwi"); # This will throw an error


5. => Object.isSealed(object) # Returns true if object is sealed

let answer = Object.isSealed(person); # This will return false (AS PREVENTED ABOVE)
let answer = Object.isSealed(fruits); # This will return false (AS PREVENTED ABOVE)


6. => Object.freeze(object) # Prevents any changes to an object

# OBJECT
const person = {firstName:"John", lastName:"Doe"};
Object.freeze(person); # Prevent any changes to person object
person.lastName = "Nodoe"; # This will throw an error

# ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits); # Prevent any changes to fruits array
fruits.pop("Kiwi"); # This will throw an error

# Remember freezing is only applied to the top-level properties in objects but not for nested objects.
const user = {
  name: "John",
  employment: {
    department: "IT",
  },
};
Object.freeze(user);
user.employment.department = "HR"; # WORKS FINE

7. => Object.isFrozen(object) # Returns true if object is frozen

let answer = Object.isFrozen(person); # This will return false (AS PREVENTED ABOVE)
let answer = Object.isFrozen(fruits); # This will return false (AS PREVENTED ABOVE)


```

- JavaScript Object Accessors (Getters and Setters)

```bash
# JavaScript Getter (The get Keyword)
# JavaScript Setter (The set Keyword)
# ==> Why Using Getters and Setters?
# It gives simpler syntax
# It allows equal syntax for properties and methods (without using "()" in methods)
# It can secure better data quality
# It is useful for doing things behind-the-scenes

# THIS IS DIFFERENT FROM FUNCTION OBJECT CREATION: THIS WILL ONLY WORK FOR THIS OBJECT
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  lang1: function () {
    return this.language;
  }, # call by person.lang1()
  lang2: function (value) {
    return (this.language = value);
  },, # call by person.lang1("OK")
  get lang3() {
    return this.language;
  },, # call by person.lang1 --> parenthesis is not needed
  set lang4(value) {
    return (this.language = value);
  },, # call by person.lang1 = "OK" --> assign value and not inside parenthesis
};

console.log( person.lang1()); # en
console.log( person.lang3); # en
person.lang2( "Hindi");
console.log( person.lang1()); # Hindi
console.log( person.lang3); # Hindi
person.lang4 = "Gujarati";
console.log( person.lang1()); # Gujarati
console.log( person.lang3); # Gujarati

```

- JavaScript Function Definitions

- A function defined as the property of an object, is called a method to the object.
- A function designed to create new objects, is called an object constructor.

```bash
1. ==> Function Declarations
function myFunction(a, b) {
  return a * b;
}

2. ==> Function Expressions
# The function below ends with a semicolon because it is a part of an executable statement.
const x = function (a, b) {
  return a * b;
};

3. ==> The Function() Constructor
# You actually don't have to use the function constructor. The example above is the same as writing:
const myFunction = new Function("a", "b", "return a * b");

4. ==> Function Hoisting
# Hoisting applies to variable declarations and to function declarations. So, JS functions can be called before they are declared:
myFunction(5); # This won't give error
function myFunction(y) {
  return y * y;
}

# Functions defined using an expression are not hoisted.
myFunction(5); # This will give error
const myFunction = function (y) {
  return y * y;
};
# Arrow function is also type of function expression so it will also give error
myFunction(5); # This will give error
const myFunction = (y) => {
  return y * y;
};

5. ==> Self-Invoking Functions - IIFE(immediately-invoked function expression)
# It is used to keep the namespace clean, increase the code readability, and introduce private data and methods.

# Function Declarations -> (function without name)
(function () {
  let x = "Hello!!";
  console.log(x); # This will be loged by itself
})();
# Function Expressions
const x = (function () {
  let x = "Hello!!";
  console.log(x); # This will be loged by itself
})();
# Arrow function
const y = (() => {
  let x = "Hello!!";
  console.log(x); # This will be loged by itself
})();

# passing arguments
const y = "OK";

(function (my_Y) { # here is the parameters
  let x = "Hello!!";
  console.log(x + my_Y);
})(y); # here pass arguments

6. ==> Functions Can Be Used as Values

function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3) * 2;

7. ==> Functions are Objects
# The typeof operator in JavaScript returns "function" for functions. But, it can best be described as objects.
# JavaScript functions have both properties and methods.

# arguments.length property
function myFunction(a, b) {
  console.log(arguments[0]); # 1
  return arguments.length;
}
myFunction(1, 2);

# toString() method
function myFunction(a, b) {
  return a * b;
}
let text = myFunction.toString(); # give whole function as string


8. ==> Arrow Functions
# Arrow functions allows a short syntax for writing function expressions.
# Arrow functions do not have their own this. They are not well suited for defining object methods.(funciton(name){this.name=name})
# Arrow functions are not hoisted. They must be defined before they are used.
# Duplicate parameter name not allowed in arrow function in any mode, strict or non-strict
# ( allowed in function expression and function declaration in non-strict mode)
# Arrow functions do not have an arguments, super, this, or new.target bindings.

const x = (x, y) => { return x * y };
console.log(x(2, 5));

# You can only omit the return keyword and the curly brackets if the function is a single statement.
const x = (x, y) => x * y;
console.log(x(2, 5));

9. first order function
# A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log("I am a first order function!");

10. higher order function
# A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

11. unary function
# function that accepts exactly one argument.

12. currying function
# Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.
# EXAMPLE1
function newFunc1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(newFunc1(1)(2)(3));

# EXAMPLE2
const newFunc2 = (a) => (b) => (c) => a + b + c;
console.log(newFunc2(4)(5)(6));

# EXAMPLE3
const evaluate = (operation) => (b) => (c) => {
  if (operation === "sum") return b + c;
  else if (operation === "substract") return b - c;
  else if (operation === "multiply") return b * c;
  else if (operation === "divide") return b / c;
  else return "Invalide Operation";
};
console.log(evaluate("sum")(6)(2)); # 8
console.log(evaluate("substract")(6)(2)); # 4
console.log(evaluate("multiply")(6)(2)); # 12
console.log(evaluate("divide")(6)(2)); # 3
console.log(evaluate("abc")(6)(2)); # "Invalide Operation"
# NOW JUST ADD EVERYTIME NO NEED TO CALL EVALUTE FUNCTION WITH SUM EVERYTIME
const add = evaluate("sum");
console.log(add(2)(5)); # 6
console.log(add(3)(6)); # 9

# EXAMPLE4 - INFINITE CURRYING
const addInfinitely = (a) => (b) => {
  if (b) return addInfinitely(a + b); # If any value is passed then return the addInfinitely function and start again
  return a; # If no value is passed then return the a (ie. the total value till now)
};
console.log( addInfinitely(2)(3)(5)()); # 10
console.log( addInfinitely(1)(2)(3)(4)(5)(6)(7)(8)(9)()); # 45



# WHY WE USE CURRING
  - To avoid passing same variable again and again
  - To create higher order functions
  - To make the function pure and less porne to errors

```

- JavaScript Function Parameters

  - Function "parameters" are the names listed in the function definition.
  - Function "arguments" are the real values passed to (and received by) the function.

  - Parameter Rules
    - JavaScript function definitions do not specify data types for parameters.
    - JavaScript functions do not perform type checking on the passed arguments.
    - JavaScript functions do not check the number of arguments received.

```bash
# Default Parameter Values
function myFunction(x = 0, y = 0) {
  return x + y;
}
myFunction(5); # Only x is provided

# Function Rest Parameter
# The rest parameter (...) allows a function to treat an infinite number of arguments as an array:
function sum(...args1) {
  console.log(args1); # [4, 9, 16, 25, 29, 100, 66, 77]
  let sum = 0;
  for (let arg of args1) sum += arg;
  return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

# The Arguments Object
# JavaScript functions have a built-in object called the arguments object. It contains an array of the arguments used when the function was called (invoked).

function myFunction() {
  console.log(arguments[0]); # 1
  return arguments.length;
}
myFunction(1, 2);

# Arguments are Passed by Value =>> If a function changes an argument's value, it does not change the parameter's original value.
# Objects are Passed by Reference =>> If a function changes an object property, it changes the original value.

```

- JavaScript Function Invocation

- If a function is not a method of a JavaScript object, it is a function of the global object

```bash
# The function below does not belong to any object. But in JavaScript there is always a default global object.
# In HTML the default global object is the HTML page itself, so the function below "belongs" to the HTML page.
# In a browser the page object is the browser window. The function below automatically becomes a window function.

function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);

# What is "this"?
  # - In an object method, this refers to the object.
  # - Alone, this refers to the global object.
  # - In a function, this refers to the global object. - OKKKKKK
  # - In a function, in strict mode, this is undefined. - OKKKKKK
  # - In an event, this refers to the element that received the event.
  # - Methods like call(), apply(), and bind() can refer this to any object.

let x = myFunction(); # x is window object in browser and in node it's "global" object

function myFunction() {
  return this;
}

# Invoking a Function as a Method
# The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName(); # Will return "John Doe"

# Invoking a Function with a Function Constructor
# It looks like you create a new function, but since JavaScript functions are objects you actually create a new object -> "new" will create a object in function constructor and not a function itself

# This is a function constructor
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}
const myObj = new myFunction("John", "Doe"); # This creates a new object

myObj.firstName; # This will return "John"

```

- JavaScript Function call()

- With call(), an object can use a method belonging to another object.

```bash
# With call(), an object can use a method belonging to another object.
# eg. person1 object uses a fullName method belonging to person object
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
person.fullName.call(person1); # This will return "John Doe":

# The call() Method with Arguments

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.call( person1, "Oslo", "Norway"); # John Doe,Oslo,Norway
```

- JavaScript Function apply()

  - The call() method takes arguments separately.
  - The apply() method takes arguments as an array.

```bash
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

# Simulate a Max Method on Arrays
Math.max(1,2,3);                # Will return 3
Math.max.apply(null, [1,2,3]);  # Will also return 3
Math.max.apply(Math, [1,2,3]);  # Will also return 3 # As first argument is object
Math.max.apply(" ", [1,2,3]);   # Will also return 3
Math.max.apply(0, [1,2,3]);     # Will also return 3 # 0 won't effect the result as it's an object and not value itself

```

- JavaScript Function bind()

```bash

# Example1
const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(greeting + ", " + this.name);
  },
};
person.greet("Hello"); # "Hello, Alice"

const greet2 = person.greet; # Here the function greet was transfered but not 'this'
greet2("Hello"); # undefined, because `this` is not bound to `person`

const greet2 = person.greet.bind(person);
greet2("Hello"); # "Hello, Alice"

# When a function is used as a callback, "this" is lost.

# Example2
# the bind() method is used to bind person.display to person.
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

setTimeout(person.display, 1000); # undefined undefined
let display = person.display.bind(person);
setTimeout(display, 1000); # John Doe

```

- JavaScript Closures
- A closure is a function having access to the parent scope, even after the parent function has closed.
  - the function defined in the closure ‘remembers’ the environment in which it was created.
  - closure contains any and all local variables that were declared inside the outer enclosing function.

```bash

# EXECUTION CONTEXT
Execution context is an abstract concept used by the ECMAScript specification to track the runtime evaluation of code. This can be the global context in which your code is first executed or when the flow of execution enters a function body.

There are times when the running execution context is suspended and a different execution context becomes the running execution context. The suspended execution context might then at a later point pick back up where it left off.

# GLOBAL EXECUTOIN CONTEXT > EXECUTION CONTEXT (FOO) > EXECUTION CONTEXT (BAR)
# 1. GLOBAL EC - EVERTHING INSIDE A FILE
# 2. EC (FOO) - EVERTHING INSIDE FOO() FUNCTION
# 3. EC (BAR) - EVERTHING INSIDE BAR() FUNCTION

var x = 10;
function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

# LEXICAL ENVIRONMENT
every execution context has a Lexical Environment. This Lexical environments holds variables and their associated values, and also has a reference to its outer environment.

# TL;DR
Execution context is an abstract concept used by the ECMAScript specification to track the runtime evaluation of code. At any point in time, there can only be one execution context that is executing code.
Every execution context has a Lexical Environment. This Lexical environments holds identifier bindings (i.e. variables and their associated values), and also has a reference to its outer environment.
The set of identifiers that each environment has access to is called “scope.” We can nest these scopes into a hierarchical chain of environments, known as the “scope chain”.
Every function has an execution context, which comprises of a Lexical Environment that gives meaning to the variables within that function and a reference to its parent’s environment. And so it appears as if the function “remembers” this environment (or scope) because the function literally has a reference to this environment. This is a closure.
A closure is created every time an enclosing outer function is called. In other words, the inner function does not need to return for a closure to be created.
The scope of a closure in JavaScript is lexical, meaning it’s defined statically by its location within the source code.
Closures have many practical use cases. One important use case is to maintain a private reference to a variable in the outer scope.


```

```bash
# JavaScript Nested Functions
# JavaScript supports nested functions. Nested functions have access to the scope "above" them.

const plus = (() => {
  let counter = 0;
  console.log("Runs once"); # It only runs once
  return () => ++counter;
})();
console.log(plus());
console.log(plus());
console.log(plus());

# Example Explaination
    # The variable "plus" is assigned to the return value of a self-invoking function.
    # The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
    # This way "plus" becomes a function. The wonderful part is that it can access the counter in the parent scope.
    # This is called a JavaScript "closure". It makes it possible for a function to have "private" variables.
    # The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

# Question and Answer
# when function calling itself then first it increase to 1 then plus() is called so it should become 2 but it start from 1 why ??????????
# BECAUSE IT IS RETURNING THE FUNCITON EXPRESSION AND NOT CALLING THE FUNCITON. FUNCITON IS ONLY CALLED BY THE PLUS VARIABLE

# ADD MORE CLOSURE EXAMPLES

# EXAMPLE 1
function makeAdder(x) {
  return (y) => x + y;
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

# EXAMPLE 2
function find() {
  const a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  return (index) => {
    console.log(a[index]);
  };
}
const newFind = find(); # IT WILL FIRST RUN THE LOOP
console.time("10");
newFind(10); # NOW WILL JUST FIND THE VALUE AND NOT RUN THE LOOP EVERYTIME
console.timeEnd("10");

console.time("100");
newFind(100);
console.timeEnd("100");

# EXAMPLE 2
function check() {
  for (var i = 0; i < 3; i++) {
    ((i) => {
      setTimeout(() => console.log(i), i * 1000);
    })(i);
  }
}
check();

# EXAMPLE 3
function counter() {
  let _counter = 0;
  function add(value = 1) {
    _counter += value;
  }
  function substract(value = 1) {
    _counter -= value;
  }
  function display() {
    console.log("Total counter is " + _counter);
    return "Total counter is " + _counter;
  }
  return { add, substract, display };
}

const myCounter = counter();
myCounter.display(); // 0
myCounter.add(3);
myCounter.add(2);
myCounter.display(); // 5
myCounter.substract(2);
myCounter.display(); // 3

const myCounter2 = counter();
myCounter2.display(); // 0
myCounter2.add();
myCounter2.add();
myCounter2.add();
myCounter2.display(); // 3


```

- JavaScript Classes <- (Search this for class intro info about classes around 2152 line )

```bash
1. ==>  Class Inheritance

# To create a class inheritance, use the extends keyword.
# A class created with a class inheritance inherits all the ""methods"" from another class:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() { # this method will automatically inherited
    return 'I have a ' + this.carname;
  }
}
# car class is inherited to model class
class Model extends Car {
  constructor(brand, mod) {
    super(brand); #  accessing to the parent's properties and methods.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
let myCar = new Model("Ford", "Mustang");

# use the get and set, if you want to do something special with the value before returning them, or before you set them.
# The name of the getter/setter method cannot be the same as the name of the property, in this case carname, use _ to separate property name from get/set
# You can use same name for get and set
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo"; # To set the carname
console.log(myCar.carname); # TO get the carname

# Hoisting in class

# Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
# That means that you must declare a class before you can use it else will give error

2. ==> JavaScript Static Methods
# You cannot call a static method on an object, only on an object class.
# If you want to use the myCar object inside the static method, you can send it as a parameter:
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
console.log( Car.hello()); # ERROR
console.log(Car.hello(myCar));
# console.log(myCar.hello()); #-> This will give an error
```

- JavaScript Callbacks
  - A callback is a function passed as an argument to another function

```bash
# Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

# Example-1
function calculate(x, y, fn) {
  const a = x + y;
  fn(a);
}
function display(result) {
  console.log(result);
}
calculate(3, 4, display); # display is a callback function

# Example-2
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
function removeNegative(arr, callback) {
  const myarr = [];
  for (let num of arr) {
    if (callback(num)) {
      myarr.push(num);
    }
  }
  return myarr;
}
const result = removeNegative(myNumbers, (x) => x >= 0);
console.log(result);

# Example-3
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);

-- CALLBACK HELL
# Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});
```

- Asynchronous JavaScript => ("I will finish later!")
  - Functions running in parallel with other functions are called asynchronous
  - eg. setTimeout()

CALLBACK VS PROMISE VS ASYNC/AWAIT -> SAME EXAMPLES

```bash
https://www.freecodecamp.org/news/javascript-asynchronous-operations-in-the-browser/
# BELOW EXECUTIONS TAKES PLACE INSIDE JS RUNTIME
callstack (inside js engine) -> webapi -> callback/event queue -> event loop

# JS ENVIRONMENT
The JavaScript runtime is the environment that contains all the resources necessary for the execution of a JavaScript program. It includes the JavaScript Engine but also includes other things we will look at.

# JS ENGINE
For a browser to interpret JavaScript code, it needs to have a JavaScript engine. This JavaScript engine is a software component of a modern web browser that accepts JavaScript code, analyzes it, and transforms it into instructions the device will understand.

Different browsers today use different JavaScript engines. For example, the Chrome Browser uses the V8 Engine from Google, Firefox uses one called Spidermonkey,etc.

# CALL STACK
The call stack is a component of a JavaScript Engine that keeps track of all the functions the program executes.
Last In First Out (LIFO) is a term that summarizes how the call stack works. The last operation that went in is the first operation that will leave the stack.

# EXAMPLE
function greeting() {
	console.log("Hello World")
}
function run() {
	greeting()
}
run()
# HERE first run() -> greeting() -> console.log("Hello World") is executed
# SO THE LAST OPERATION IS EXECUTED FIRST (ie. console.log("Hello World") then> greeting() and then> run())

# WEB APIS
JavaScript uses the browser’s provided Web Application Programming Interfaces (Web APIs).
The Web APIs are a set of functions provided by the browser that the JavaScript engine can utilize. They include examples such as Document Object Model (DOM) manipulation methods, fetch, setInterval, setTimeout, promises, async-await functions, and more.
- IN NODEJS JS OFFLOAD OPERATION TO THE SYSTEMS KERNAL (MOST KERNAL ARE MULTITHREAD SO THEY CAN HANDLE IN THE BACKGROUND)
- The JavaScript Engine interacting with the Web APIs inside the JavaScript Runtime

# CALLBACK
Asynchronous operations provide a response after being processed using Web APIs. The purpose of writing an asynchronous function is to utilize the function''s output for subsequent operations. We refer to the functions that rely on the response from asynchronous operations as callback functions.

`A callback function is a function that is passed as an argument to a parent function, which the parent function needs to invoke after completing its process. In JavaScript, asynchronous operations utilize callbacks to further process the responses they receive from Web APIs.`

To ""recap"", a callback function is passed in as an argument to an asynchronous function and only runs when the asynchronous operation has been completed.

# EXAMPLE
fetch("<https://jsonplaceholder.typicode.com/users>")
.then((response) => response.json())
.then((response) => console.log(response))
# Here, the 1st "then" function will be executed after the response from fetch.
# And 2nd "then" function will be executed after the 1st "then" (another asyn function)

# CALLBACK QUEUE
The callback queue is a software mechanism that stores callback functions to be run after the Web APIs have processed asynchronous functions. It uses the queue data structure which works with the First In First Out (FIFO) approach. This means that the first callback added to that queue is going to be the first callback to leave.

- The JavaScript Engine interacting with the Web APIs AND AFTER THEIR EXECUTION THEY PUSH CALLBACK TO THE CALLBACK QUEUE, EVERTHING HAPPENS inside the JavaScript Runtime

# EVENT LOOP
The event loop is a loop that continuously checks if the call stack is empty. When the call stack is not empty, it allows the ongoing process to continue. But when the call stack becomes empty, the event loop fetches the task at the top of the callback queue and adds it to the call stack.
So the JavaScript Engine executes callbacks only after everything in the call stack has been processed.

# EXAMPLE
console.log('A')
setTimeout(( ) => console.log('B'), 0) # THIS WILL BE EXECUTED AT LAST
console.log('C')
// A
// C
// B

```

```bash

console.log("1"); # first this will be printed
setTimeout(( ) => console.log("I will"), 2000);  # third(Last) this will be printed
console.log("2"); # second this will be printed
# 1, 2, I will #

# Callback Alternatives
    # With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
    # But, asynchronus programmes are difficult to write and difficult to debug.
    # Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

```

- JavaScript Promises
  - "Producing code" is code that can take some time
  - "Consuming code" is code that must wait for the result
  - A Promise is an Object that links Producing code and Consuming code

```bash
# Promise Syntax

let myPromise = new Promise((res, rej) => {
  # "Producing Code" (May take some time) --> It can be anything like api call
  const x = 0;
  if (x === 0) {
    res();
  } else {
    rej();
  }
});
console.log(myPromise); # Promise { undefined }

# "Consuming Code" (Must wait for a fulfilled Promise)
# first callback is for success and second callback is for failure ### Both are optional, so you can add a callback for success or failure only.
myPromise.then(
  () => console.log("resolve"),
  () => console.log("reject")
);

-> A JavaScript Promise object can be: (myPromise.state -- myPromise.result)
    # Pending -- the result is undefined
    # Fulfilled -- then the result is a value.
    # Rejected -- then the result is an error object.
# You cannot access the Promise properties state and result.
# You must use a Promise method to handle promises. (myPromise.then().catch()..)

#--> PROMISE VS CALLBACK

# CALLBACK
setTimeout(() => myFunction("I love You !!!"), 2000);
const myFunction = (value) => { ####### HOW THIS DON'T GIVE ERROR AS IT IS CALLED ABOVE IT
  console.log(value);
};

# PROMISE
let myPromise = new Promise((myResolve, myReject) => {
  setTimeout(() => myResolve("I love You !!"), 3000);
});
myPromise.then((value) => console.log(value));

-- promise chaining
# The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });

-- promise.all
# Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.
Promise.all([Promise1, Promise2, Promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(`Error in promises ${error}`));

-- Promise.race()
# This method will return the promise instance which is firstly resolved or rejected.
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});
```

- JavaScript Async - ("async and await make promises easier to write")
  - async makes a function return a Promise
  - await makes a function wait for a Promise

```bash
# ASYNC SYNTAX:-> Both function works the same way
async function myFunction() {
  return "Hello!!";
}
function myFunction() {
  return new Promise((res, rej) => res("Hello2"));
}
myFunction().then(
  () => console.log(myFunction()),
  () => console.log("reject")
);

# AWAIT SYNTAX:->
async function myFunction() {
  let myPromise = new Promise((res) => setTimeout(() => res("Hello!"), 2000));
  console.log(myPromise); // Promise { <pending> }
  const value = await myPromise;
  console.log(value); // Hello!
  console.log(myPromise); // Promise { 'Hello!' }
}
myFunction();

async function func() {
  return 10;
}
console.log( func());                         # Promise { 10 } |  Promise {<fulfilled>: 10}

#
async function delayedLog(item) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(item);
}

# WITH FOREACH CODE
  # - array.forEach does not wait for await delayedLog(item) to complete before starting the next iteration.
  # - All iterations start almost immediately and the delayedLog function is called concurrently for each item.
  # - "Process completed!" is logged before any of the delayedLog operations have completed, because forEach itself is not asynchronous and does not wait for the async function to resolve.
// async function processArray(array) {
//   array.forEach(async(item) => {
//     await delayedLog(item);
//   })
// }
# UNCOMMENT ABOVE PART AND COMMENT THIS (BELOW WILL WAIT EVERY 2 SECOND ABOVE WON'T)

# WITH FOR-OF CODE
  # - Each delayedLog(item) waits for 2 seconds before logging the item.
  # - The next iteration starts only after the previous one has completed, leading to sequential execution.
  # - The total time taken will be 2 seconds * number of items in the array.
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log("Process completed!"); # THIS WILL BE PRINTED 1ST OR LAST DEPENDING ON COMMENT
}

processArray([1, 2, 3, 4]);


```

- JavaScript HTML DOM

```bash
- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM is a standard object model and programming interface for HTML

<input type="text" id="fname" oninput="upperCase()"> # This will change every input to uppercase

# Event Bubbling or Event Capturing

# In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

# In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

# The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

addEventListener("click", myFunction, true);
removeEventListener("mousemove", myFunction);

---- The Browser Object Model
1. JS window
2. JS screen
3. JS location
4. JS history
5. JS navigator
6. JS popup alert
7. JS timing
8. JS cookies

1. JS window # All global JavaScript objects, functions, and variables automatically become members of the window object.

window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)
window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window

2. JS screen # The window.screen object contains information about the user's screen.

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

3. JS location # The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document

4. JS history # The window.history object contains the browsers history.

history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

5. JS navigator # The window.navigator object contains information about the visitor's browser.

navigator.cookieEnabled
navigator.appCodeName
navigator.platform

6. JS popup alert

window.alert() :==> alert("I am an alert box!");
# An alert box is often used if you want to make sure information comes through to the user.
# When an alert box pops up, the user will have to click "OK" to proceed.

window.confirm() :==> confirm("Press a button!")
# A confirm box is often used if you want the user to verify or accept something.
# When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
# If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

window.prompt() :==> prompt("Please enter your name", "Harry Potter")
# A prompt box is often used if you want the user to input a value before entering a page.
# When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
# If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
# Can give default value as second argument (eg. Harry Potter)


7. JS timing

setTimeout(function, milliseconds) # Executes a function, after waiting a specified ms.
setInterval(function, milliseconds) # repeats the execution of the function continuously.
clearTimeout(variable) # stops the executions of the function specified in the setTimeout() method.
clearInterval(variable) # stops the executions of the function specified in the setInterval() method.
# you can technically use clearTimeout() and clearInterval() interchangeably. However, for clarity, you should avoid doing so.
# eg. const x = setTimeout(function, milliseconds); then-> clearTimeout(x)

const arr = [1, 2, 3, 4, 5];
arr.forEach((i) => setTimeout(() => console.log(i), 1000));
# It will print 1,2,3,4,5 all together after 1 second: Because setTimeout will await the first array then it will go to second iteration same will work till all the iteration then after 1 sec all start to log value


8. JS cookies # Cookies let you store user information in web pages.
# Cookies are data, stored in small text files, on your computer.
# By default, the cookie is deleted when the browser is closed

document.cookie # it can create, read, and delete cookies

# create a cookie or change it
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; # You can also add an expiry date (in UTC time) and path for cookie to store
# Read a Cookie
let x = document.cookie;
# Delete a Cookie -- Just set the expires parameter to a past date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; # You should define the cookie path to ensure that you delete the right cookie.

```

- Web APIs

```bash
# The Web Storage API is a simple syntax for storing and retrieving data in the browser.
localStorage.setItem("name", "John Doe");
localStorage.getItem("name"); # returns "John Doe"

# The sessionStorage Object
# Same as localStorage only difference is sessionStorage object stores data for one session.
sessionStorage.setItem("name", "John Doe");
sessionStorage.getItem("name");

key(n)	                Returns the name of the nth key in the storage
length	                Returns the number of data items stored in the Storage object
getItem(keyname)	      Returns the value of the specified key name
setItem(keyname, value)	Adds a key to the storage, or updates a key value (if already exists)
removeItem(keyname)	    Removes that key from the storage
clear()	                Empty all key out of the storage


# JavaScript Fetch API

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}

# Web Geolocation API
# The HTML Geolocation API is used to get the geographical position of a user.
# The Geolocation API will only work on secure contexts such as HTTPS.

getCurrentPosition(); # method is used to return the user's position.

# COPY THIS AND PASTE IT TO THE CONSOLE OF THE BROWSER
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  console.log(position);
  console.log(position.coords);
}
getLocation();

# Handling Errors and Rejections
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

# To display the result in a map, you need access to a map service, like Google Maps.

# the returned latitude and longitude is used to show the location in a Google Map (using a static image):
function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

# Geolocation Object

watchPosition(); # Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
clearWatch(); # Stops the watchPosition() method.
```

- AJAX = Asynchronous JavaScript And XML. ---> IT'S LIKE FETCH REQUEST FROM BROWSER

  - Read data from a web server - after the page has loaded
  - Update a web page without reloading the page
  - Send data to a web server - in the background
  - AJAX is not a programming language.
  - AJAX is a technique for accessing web servers from a web page.
  - AJAX just uses a combination of:

    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - JavaScript and HTML DOM (to display or use the data)

  - The Fetch API interface allows web browser to make HTTP requests to web servers.
  - If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

```bash

```

- JSON stands for JavaScript Object Notation
- JSON is a text format for storing and transporting data

  - The file type for JSON files is ".json"
  - The MIME type for JSON text is "application/json"

```bash
# In JSON, values must be one of the following data types:

1. a string

- {"name":"John"}

2. a number

- {"age":30}

3. an object

- { "employee":{"name":"John", "age":30, "city":"New York"} }
4. an array

- { "employees":["John", "Anna", "Peter"] }

5. a boolean

- {"sale":true}

6. null

- {"middlename":null}

# CANNOT SEND THIS 3 ITEMS OVER JSON
  - a date
  - undefined
  - function

  # - [IF YOU SEND RAW FUNCTION THEN IT WILL AUTOMATICALLY BE REMOVED]
const obj = {name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj); # {"name":"John","city":"New York"} - fn is removed

  # Stringify Functions - YOU CAN SEND THE FUNCTION BY FIRST CONVERTING IT INTO STRING?
  # [ AVOID THIS TRICK AND DONT SEND FUNCTION OVER JSON ]
  # If you need to include a function, write it as a string.
  # then use eval() to convert them back into functions.

console.log( JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] }));
# {"myArray":["one",null,null,null]}
console.log( JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")]));
# {}


# JSON vs XML

#  JSON is Better Than XML
XML is much more difficult to parse than JSON.
JSON is parsed into a ready-to-use JavaScript object.

->> JSON.parse(val,fun) # to convert text into a JavaScript object: function is called reviver and is optional
# The reviver parameter is a function that checks each property, before returning the value.
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
 });  # Here the if the value of birth will be changed to date and not returned as string
console.log(obj); # { name: 'John', birth: 1986-12-14T00:00:00.000Z, city: 'New York' }

->> JSON.stringify(); # to convert it into a string.
# eg
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

# Storing Data
# Use JSON to store data to local storage in browser

# JSON.stringify() function will convert any dates into strings.
# You can convert the string back into a date object at the receiver.

```

callback and promise: difference + similarity, write same examples in both

- encoding and decoding a URL
  - Use encodeURIComponent when you need to encode a single part of a URI, such as a query parameter.
  - Use encodeURI when you need to encode a full URL.
  - Use decodeURIComponent to decode a single encoded component.
  - Use decodeURI to decode an entire encoded URL.

```bash

# Encoding
# 1. encodeURIComponent()
const urlComponent = 'Hello World!';
const encodedComponent = encodeURIComponent(urlComponent);
console.log(encodedComponent); # Output: Hello%20World%21

# 2. encodeURI()
const url = 'http://example.com/Hello World!';
const encodedURL = encodeURI(url);
console.log(encodedURL); # Output: http://example.com/Hello%20World!

# Decoding
# 3. decodeURIComponent()
const encodedComponent = 'Hello%20World%21';
const decodedComponent = decodeURIComponent(encodedComponent);
console.log(decodedComponent); # Output: Hello World!

# 4. decodeURI()
const encodedURL = 'http://example.com/Hello%20World!';
const decodedURL = decodeURI(encodedURL);
console.log(decodedURL); # Output: http://example.com/Hello World!

```

- All Info

- CODE ALMOST ALL THE QUESTION AND GIVE ANSWERS FOR THEM
- https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file

```bash

1. Difference betweem-> local storage vs session storage vs cookie

https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-are-the-differences-between-cookie-local-storage-and-session-storage

2. What is the difference between native, host and user objects

Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec. Host objects are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects. User objects are objects defined in the javascript code. For example, User objects created for profile information.

3. What is the use of preventDefault method

The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.
Note: Remember that not all events are cancelable.

4. What is BOM

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

5. What is ECMAScript

ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

6. How do you check if a key exists in an object

- Using in operator:
"key" in obj; # true if exist
!("key" in obj); # true if not exist

- Using hasOwnProperty method:
obj.hasOwnProperty("key"); // true

- Using undefined comparison:
const user = {
  name: "John",
};
console.log(user.name !== undefined); // true
console.log(user.nickName !== undefined); // false

7. How do you test for an empty object

# Since date object length is 0, you need to check constructor check as well
Object.keys(obj).length === 0 && obj.constructor === Object;
Object.entries(obj).length === 0 && obj.constructor === Object;

8. Can we define properties for functions (140)
# Yes, We can define properties for functions because functions are also objects.
fn = function (x) {
  #Function code goes here
};
fn.name = "John";

fn.profile = function (y) {
  #Profile code goes here
};

9. What is the way to find the number of parameters expected by a function
# You can use function.length syntax to find the number of parameters expected by a function. Let's take an example of sum function to calculate the sum of numbers,
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length; // 4 is the number of parameters expected.

10. What is tree shaking

Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export).
Tree shaking is implemented in Rollup and Webpack bundlers.

11. Is it recommended to use eval

No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

12. What is the difference between proto and prototype

https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-the-difference-between-proto-and-prototype

13. Spread operator vs Rest operator

# SPREAD OPERATOR
The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.
# Example
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(...arr1, ...arr2); # 1, 2, 3, 4
console.log([...arr1, ...arr2]); # [ 1, 2, 3, 4 ]

# REST OPERATOR
While the spread operator expands elements, the rest operator(rest parameter) condenses them into a single entity within function parameters or array destructuring.
# Example1 -- function parameters
function sum(a, ...b) {
  console.log({ a, b }); # { a: 1, b: [ 2, 3 ] }
}
sum(1, 2, 3);

# Example2 -- array destructuring
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c); # 1, 2, [ 3, 4, 5 ]

A rest parameter must be last in a parameter list, as its job is to collect all the remaining arguments into an array.
# Example
const [a, b, ...c, e] = [1, 2, 3, 4, 5]; # GIVES ERROR

# DIFFERENCE
The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

# Example
function sum(a, ...b) { # REST OPERATOR
  console.log({ a, b }); // { a: 1, b: [ 2, 3, 4 ] }
}

const arr1 = [1, 2];
const arr2 = [3, 4];

sum(...arr1, ...arr2); // 1, 2, 3, 4 # SPREAD OPERATOR

14. What is the purpose of using object is method

# Example
Object.is("hello", "hello"); // true
Object.is(window, window); // true
Object.is([], []); // false

Some of the applications of Object''s is method are follows,
  It is used for comparison of two strings.
  It is used for comparison of two numbers.
  It is used for comparing the polarity of two numbers.
  It is used for comparison of two objects.

15. How do you print the contents of web page

The window object provided a print() method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options.

16. What is an anonymous function

An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function.

17. What are the advantages of Getters and Setters

They provide simpler syntax
They are used for defining computed properties, or accessors in JS.
Useful to provide equivalence relation between properties and methods
They can provide better data quality
Useful for doing things behind the scenes with the encapsulated logic.

18. What is an event loop

The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.
Note: The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.

19. What is call stack

Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,
  - Whenever you call a function for its execution, you are pushing it to the stack.
  - Whenever the execution is completed, the function is popped out of the stack.

20. What is an event queue -> [ WHOLE ASYNC FUNCTION STRUCTURE ]

The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).

The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.

21. What is an Unary operator

The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let''s see this behavior in an action.

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN

22. How do you define multiple properties on an object

The Object.defineProperties() method is used to define new or modify existing properties directly on an object and returning the object. Let''s define multiple properties on an empty object,

const newObject = {};
Object.defineProperties(newObject, {
  newProperty1: {
    value: "John",
    writable: true,
  },
  newProperty2: {},
});

23. What is an enum

An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.

24. How do you list all properties of an object

You can use the Object.getOwnPropertyNames() method which returns an array of all properties found directly in a given object. Let''s see the usage of this in an example below:

const newObject = { a: 1, b: 2, c: 3 };

console.log( Object.getOwnPropertyNames(newObject));
["a", "b", "c"];

25. How do you compare scalar arrays

You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,

const arrayFirst = [1, 2, 3, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.every((value, index) => value === arraySecond[index])
); // true

If you would like to compare arrays irrespective of order then you should sort them before,

const arrayFirst = [2, 3, 1, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.sort().every((value, index) => value === arraySecond[index])
); //true

26. How do you create an infinite loop

You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,

for (;;) {}
while (true) {}

27. Can I redeclare let and const variables

No, you cannot redeclare let and const variables. If you do, it throws below error

Explanation: The variable declaration with var keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let''s take an example of re-declaring variables in the same scope for both var and let/const variables.

var name = "John";
function myFunc() {
  var name = "Nick";
  var name = "Abraham"; // Re-assigned in the same function block
  alert(name); // Abraham
}
myFunc();
alert(name); // John

--- The block-scoped multi-declaration throws syntax error,

let name = "John";
function myFunc() {
  let name = "Nick";
  let name = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
  alert(name);
}
myFunc();
alert(name);

28. Does the const variable make the value immutable

No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

const userList = [];
userList.push("John"); // Can mutate even though it can''t re-assign
console.log(userList); // ['John']

29. What are typed arrays -- 320

Typed arrays are array-like objects from ECMAScript 6 API for handling binary data.

30. What is postMessage()?

The method window. postMessage() is used by the application to allow cross-origin communication between different window objects, e.g. between a page and a pop-up that it spawned or between a page and an iframe embedded within it.

31. Is JavaScript faster than server side script

Yes, JavaScript is faster than server side scripts. Because JavaScript is a client-side script it does not require any web server’s help for its computation or calculation. So JavaScript is always faster than any server-side script like ASP, PHP, etc

32. What is the difference between Shallow and Deep copy

Shallow Copy: Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

Deep copy: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

33. What happens if we add two arrays

If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,
As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""

console.log(["a"] + ["b"]); // "ab"
console.log([] + []); // ""

34. How do you remove falsy values from an array

const myArray = [false, null, 1, 5, undefined];
const trueArray = myArray.filter((v) => !!v);  # [1, 5]
const trueArray = myArray.filter((v) => v);    # [1, 5]
const trueArray = myArray.filter(Boolean);     # [1, 5]
console.log({ trueArray });

35. How do you get unique values of an array

const myArray = [1, 2, 3, 2, 1];
const uniqueArray = [...new Set(myArray)]; // [ 1, 2, 3 ]

36. How do you empty an array

let cities = ["Singapore", "Delhi", "London"];
cities.length = 0; // cities becomes []

37. What is the easiest way to convert an array to an object

var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

--  YOU CAN ALSO RESIZE AN ARRAY
var array = [1, 2, 3, 4, 5];
console.log(array.length); // 5

array.length = 2;
console.log(array.length); // 2
console.log(array); // [1,2]

38. How do you create an array with some data

var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]

39. How do you display data in a tabular format using console object

The console.table() is used to display data in the console in a tabular format to visualize complex arrays or objects.

40. How do you disable right click in the web page

The right click on the page can be disabled by returning false from the oncontextmenu attribute on the body element.

<body oncontextmenu="return false;"></body>

41. What is AJAX

AJAX stands for Asynchronous JavaScript and XML. We can send data to the server and get data from the server without reloading the web page.

42. What is heap

Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

43. What is babel

Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

44. What is the difference between function and class declarations

The main difference between function declarations and class declarations is hoisting. The function declarations are hoisted but not class declarations.

45. What are the differences between arguments object and rest parameter

There are three main differences between arguments object and rest parameters
  - The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
  - The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
  - The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function

46. What is the difference between isNaN and Number.isNaN?

isNaN: The global function isNaN converts the argument to a Number and returns true if the resulting value is NaN.
Number.isNaN: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.
# Example
isNaN("hello");   // true
Number.isNaN("hello"); // false
isNaN("100");   // false
Number.isNaN("100"); // false
isNaN("NaN"); // true
Number.isNaN("NaN"); // false
isNaN(NaN); // true
Number.isNaN(NaN); // true
Number.isNaN("ABC" / "ABC"); // true
Number.isNaN("ABC" * "ABC"); // true

# isNaN converts the argument to a Number and returns true if the resulting value is NaN.
# Number.isNaN does not convert the argument; it returns true when the argument is a Number and is NaN.

|               |       Number.isNaN()       |        isNaN()
----------------+----------------------------+-----------------------
value           | value is a Number | result | Number(value) | result
----------------+-------------------+--------+---------------+-------
undefined       | false             | false  | NaN           | true
{}              | false             | false  | NaN           | true
"blabla"        | false             | false  | NaN           | true
new Date("!")   | false             | false  | NaN           | true
new Number(0/0) | false             | false  | NaN           | true
"ABC" * "ABC"   | true              | true   | NaN           | true
# IF STRING OR OBJECTS,ETC (IF NOT NUMBER)

47. How do you reverse an array without modifying original array?

The reverse() method reverses the order of the elements in an array but it mutates the original array. Let''s take a simple example to demonistrate this case,

# MODIFYING ORIGINAL ARRAY
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.reverse();
console.log(newArray); // [ 5, 4, 3, 2, 1]
console.log(originalArray); // [ 5, 4, 3, 2, 1]

# WITHOUT MODIFYING ORIGINAL ARRAY

# 1. Using slice and reverse methods: In this case, just invoke the slice() method on the array to create a shallow copy followed by reverse() method call on the copy.
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]

# 2. Using spread and reverse methods: In this case, let's use the spread syntax (...) to create a copy of the array followed by reverse() method call on the copy.
const originalArray = [1, 2, 3, 4, 5];
const newArray = [...originalArray].reverse();
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]

48. What is debouncing?

Debouncing is a programming pattern that allows delaying execution of some piece of code until a specified time to avoid unnecessary CPU cycles, API calls and improve performance. The debounce function make sure that your code is only triggered once per user input. The common usecases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.

# DEBOUNCING USING CLOSURE
const debounceFn = (() => {
  let value;
  return (val) => {
    clearTimeout(value);
    value = setTimeout(() => console.log("Called", val), 1000);
  };
})();
debounceFn(1); # This will not execute (Override by second function)
setTimeout(( ) => debounceFn(2), 500); # This will be executed

# DEBOUNCING WITHOUT USING CLOSURE
let value;
function debounceFn(val) {
  clearTimeout(value);
  value = setTimeout(() => console.log("Called", val), 1000);
}
debounceFn(1);
setTimeout(() => debounceFn(2), 500);

49. What is Throttling?

Throttling is a technique used to limit the rate at which a function is called. Throttling transforms a function such that it can only be called once in a specific interval of time.

# EXAMPLE









50. What is optional chaining?

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
# EX1
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

# EX2
console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

51. How to verify if a variable is an array?

It is possible to check if a variable is an array instance using 3 different ways,
  # 1. Array.isArray() method:
  Array.isArray(myArr); // true
  # 2. instanceof operator:
  myArr instanceof Array; // true
  # 3. Checking constructor type:
  myArr.constructor === Array; // true

52. What is pass by value and pass by reference?

Pass-by-value creates a new space in memory and makes a copy of a value. Primitives such as string, number, boolean etc will actually create a new copy. Hence, updating one value doesn''t impact the other value. i.e, The values are independent of each other.

Pass-by-reference doesn''t create a new space in memory but the new variable adopts a memory address of an initial variable. Non-primitives such as objects, arrays and functions gets the reference of the initiable variable. i.e, updating one value will impact the other variable.

# PRIMITIVES VS NON-PRIMITIVES
Primitives	                      Non-primitives
These types are predefined	      Created by developer
These are immutable	              Mutable
Compare by value	                Compare by reference
Stored in Stack	                  Stored in heap
Contain certain value	            Can contain NULL too

53. What is the difference between map and forEach functions?

Both map and forEach functions are used to iterate over an arrays but there are some differences in their functionality.
  I. Returning values: The map method returns a new array with transformed elements whereas forEach method returns undefined eventhough both of them are doing the same job.
  - The `forEach()` method in JavaScript always returns undefined. This is because forEach() is used to iterate over arrays and perform side effects on each element, rather than returning a `new array or transforming the original array`

  II. Chaining methods: The map method is chainable. i.e, It can be attached with reduce, filter, sort and other methods as well. Whereas forEach cannot be attached with any other methods because it returns undefined value.

  III. Mutation: The map method doesn't mutate the original array by returning new array. Whereas forEach method also doesn't mutate the original array but it's callback is allowed to mutate the original array.

```

- PRACTICE QUESTIONS (mostly difficult)

```bash

# 1 MAKE A FUNCTION ONLY RUNS ONCE (V.HARD)
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("Hello", a, b));
const hello1 = once((a, b) => console.log("Hello", a, b));

hello(1, 2);
hello(1, 2);
hello(3, 2);
hello1(2, 3);
hello1(2, 3);

# 2 MEMOIZE THE FUNCTION RESULT (V.HARD)
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) {}
  return num1 * num2;
};

const memoizedclumzyProduct = myMemoize(clumsyProduct);

# HERE THE FUNCTION WILL RUN AND RESULT WILL BE SAVED
console.time("First Call");
console.log(memoizedclumzyProduct(9467, 7649));
console.timeEnd("First Call");

# HERE THE MEMOIZED RESULT WILL BE SHOWN
console.time("Second Call");
console.log(memoizedclumzyProduct(9467, 7649));
console.timeEnd("Second Call");

```
