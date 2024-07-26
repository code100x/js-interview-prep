-- ----- ALSO GET DATA FROM THE TS LECTURE NOTES FROM (DAILYCODE + CMS + MY_NOTES)

- TypeScript is JavaScript with added syntax for types.

- TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

- TypeScript is transpiled into JavaScript using a compiler.

```bash
# Type Assignment ->
# 1. Explicit: writing out the type:
let firstName: string = "Dylan";

# 2. Implicit: TypeScript will "guess" the type, based on the assigned value:
let firstName = "Dylan";

# Note: Having TypeScript "guess" the type of a value is called infer.
# TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
```

- TypeScript Simple Types

  - There are three main primitives in JavaScript and TypeScript.
    - boolean - true or false values
    - number - whole numbers and floating point values
    - string - text values like "TypeScript Rocks"
  - There are also 2 less common primitives used in later versions of Javascript and TypeScript.
    - bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
    - symbol are used to create a globally unique identifier.

```bash

```

- TypeScript Special Types - [These types don't have much use]

  - any - it disables type checking and effectively allows all types to be used.

    - any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able to provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...

  - unknown - it is a similar, but safer alternative to any.

    - unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it. Casting is when we use the "as" keyword to say property or variable is of the casted type.

  - never - it effectively throws an error whenever it is defined.

    - never is rarely used, especially by itself, its primary use is in advanced generics.

  - undefined & null - undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

```bash
let y: undefined = undefined;
let z: null = null;

```

- TypeScript Arrays

```bash
const names: string[] = [];
names.push("Dylan"); # no error

# The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Dylan"];
names.push("Jack"); # Error: Property 'push' does not exist on type 'readonly string[]'.

# TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; # inferred to type number[]
const numbers = [1, 2, 3, "a"]; # inferred to type (string | number)[]

numbers.push(4); # no error

```

- TypeScript Tuples
  - A tuple is a typed array with a pre-defined length and types for each index.

```bash
# define our tuple
let ourTuple: [number, boolean, string]; # CONST WILL GIVE ERROR FOR TUPLES [USE LET ONLY]

ourTuple = [5, false, 'Coding']; # initialize correctly
ourTuple = [false, 'Coding God was mistaken', 5]; # wrong order will also gives error
console.log(ourTuple[0]); # To access 1st element

const ourTuple: [string, number] = ["s", 2,2,4]; # YOU CAN WRITE ANY TYPE AFTER THIS SO CREATE READONLY TUPLES --NO IT IS GIVING ERROR

# READONLY TUPLES
# define our readonly tuple - YOU CANNOT CHANGE IT LATER
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'Coding'];

# useState in react returns a tuple of the value and a setter function. It's a example of tuple : const [firstName, setFirstName] = useState('Dylan')

# NAMED TUPLES ::
# you can access elements by their names, making the code more readable.
const ourTuple: [letter: string, digit: number] = ["s", 2];

# Destructuring Tuples::
# Since tuples are arrays we can also destructure them.
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

```

- TypeScript Object Types

```bash

# OBJECT TYPE

const car: { type: string, model: string, year: number } = {
  type: "Toyota", model: "Corolla", year: 2009 };

# TypeScript can infer the types of properties based on their values.
const ourTuple = { name: "ok" };
ourTuple.name = "go"; # Can change without error
ourTuple.name = 3; # will show error

# Optional Properties::

const car: { type: string, mileage: number } = { # error
  type: "Toyota"
};
const car: { type: string, mileage?: number } = {
# added "?" so mileage property is now optional so no error
  type: "Toyota"
};
car.mileage = 2000;

# Index Signatures::

# this means the key is string and value is number for all the value
const obj: { [index: string]: number } = { one: 1 };
obj.two = 2; # Works fine
obj.three = "three"; # Gives Error

# Index signatures like this one can also be expressed with utility types like Record<string, number>.
```

- TypeScript Enums

  - An enum is a special "class" that represents a group of constants (unchangeable variables).
  - Enums come in two flavors string and numeric. Lets start with numeric.

```bash
# Numeric Enums - Default::

# By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
console.log(CardinalDirections.North);  # 0
console.log(CardinalDirections.East);   # 1
console.log(CardinalDirections.["South"]);  # 2 # You can also call it this way
console.log(CardinalDirections.["West"]);   # 3
console.log(CardinalDirections[1]);        # East
console.log(CardinalDirections[3]);        # West
console.log(CardinalDirections[0]);        # North

# Numeric Enums - Initialized::

# If no value is provided then it will add one to next enum value
enum CardinalDirections {
  North = 5,
  East,
  South,
  West,
}
console.log(CardinalDirections.North);  # 5
console.log(CardinalDirections.East);   # 6
console.log(CardinalDirections.South);  # 7
console.log(CardinalDirections.West);   # 8

# Enum can have duplicate values but avoid doing this
enum CardinalDirections {
  North = 5,     # 5
  East,          # 6
  South = 5,     # 5
  West,          # 6
}
# Numeric Enums - Fully Initialized::

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes["Accepted"]);    # 404 # You can also write it this way
console.log(StatusCodes["Success"]);     # 200
console.log(StatusCodes.Accepted);       # 202
console.log(StatusCodes.BadRequest);     # 400
console.log(StatusCodes[200]);           # Success

# String Enums ::

# Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
enum CardinalDirections {
  North = "myNorth",
  East = "myEast",
  South = "mySouth",
  West = "myWest",
}
console.log(CardinalDirections["North"]);     # myNorth
console.log(CardinalDirections["East"]);      # myEast
console.log(CardinalDirections.South);        # mySouth
console.log(CardinalDirections.West);         # myWest
console.log(CardinalDirections["MyWest"]);    # West  #YOU CAN'T CALL BY VALUES (CAN DO IN NUM)

```

- TypeScript "Type" Aliases and "Interfaces"
  - Aliases and Interfaces allows types to be easily shared between different variables/objects.

```bash
1. Type - # allow defining types with a custom name
# Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

# First define the types here
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear; # Year is number as defined by CarYear
  type: CarType;
  model: CarModel;
};

# Then just use name here
const myCarYear: CarYear = 2001;
const myCarType: CarType = "Toyota";
const myCarModel: CarModel = "Corolla";
const myCar: Car = {
  year: myCarYear,
  type: myCarType,
  model: myCarModel,
};

# Extending types :: - [MEANS ADDING TYPES]
# It means creating a new interface with the same properties as the original, plus something new.
type Name = {
  name: string;
};
type Age = {
  age: number;
};
type Person = Name & Age; # You can add them with "&"
const person: Person = {
  name: "Alice",
  age: 30
};
console.log(person); # { name: "Alice", age: 30 }

2. Interfaces
# Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

# Extending Interfaces ::
# It means creating a new interface with the same properties as the original, plus something new.
interface Rectangle {
  height: number;
  width: number;
}
interface ColoredRectangle extends Rectangle {
  color: string;
  // height: string; # gives error as it contradicts with the extend type {can write same type}
}
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

# Declaration Merging :: -> ONLY INTERFACE CAN DO IT AND NOT TYPES
# you can define multiple declarations with the same name, and TypeScript will automatically merge them into a single interface.
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const person: Person = {
  name: "Alice",
  age: 30,
};

*** Differences Between interface and type in TypeScript:
    i- Declaration Merging:
        - Interface: Supports declaration merging.
        - Type: Does not support declaration merging.

    ii- Usage with Classes:
        - Interface: Can be implemented by classes.
        - Type: Can describe class instances but is less idiomatic for class implementation.

    iii- Extending/Intersection:
        - Interface: Uses extends for inheritance.
        - Type: Uses intersection types (&) for combining types.

      4. Function Overloads:
        - Interface: Can define multiple function signatures (overloads).
        - Type: Can define function types but less naturally supports overloads.

      5. Recursive Types:
        - Interface: Naturally suited for recursive structures.
        - Type: Can handle recursive structures but with different syntax.

```

- TypeScript Union Types (Union '|' (OR))
  - Union types are used when a value can be more than a single type.
  - Such as when a property would be string or number.

```bash
# Using the | we are saying our parameter is a string or number
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

# Union Type Errors
# Note: you need to know what your type is when union types are being used to avoid type errors:
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`);
}
# The above line will give error as toUpperCase() property is not for numbers:: YOU CAN SOLVE THIS BY USING "as" (CASTING) FOR PERTICULAR VARIABLE TO SPECIFY THE TYPE
function printStatusCode(code: string | number) {
  console.log(`My status code is ${(code as string).toUpperCase()}.`);
}


```

- TypeScript Functions

```bash

1. Return Type

# What type of value this function will return - MOST OF THE TIME IT WILL INFER
function getTime(): number { # REMOVING RETURN TYPE THE FUNCTION WILL INFER THE TYPE HERE
  return new Date().getTime();
}
# If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

# Void Return Type ::
function printHello(): void {
  console.log('Hello!');
}

2. Parameters

# Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
  return a * b;
}

# Optional Parameters :: "?"

# By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

# Default Parameters :: "="

# The default value goes after the type annotation:
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

# Named Parameters :: "{}:{}"

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

# YOU CAN CREATE TYPE FOR NAMED PARAMETERS THIS WAY
type Finding2 = (p: { x: string; y: number }) => number;

# Rest Parameters :: "..."

# Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

3. Type Alias for functions

# Function types can be specified separately from functions with type aliases.
# These types are written similarly to arrow functions
# ONLY USED FOR FUNCTION EXPRESSION(VARIABLE FN) AND NOT FUNCITON DECLARATION(NORMAL FN)
# FOR FUNCTION DECLARATION USE INLINE TYPES OR MAY USE UTILITY TYPES (BUT AVOID THIS)

type FuncitonType = (age: number) => String;

const addAge: FuncitonType = (age) => {
  // return 3; # This will give error as return type is specified to string and not number
  return `Your age is ${age}`;
};

```

- TypeScript Casting
  - Casting is the process of overriding a type.

```bash

1. Casting with as

let x: unknown = "hello";
console.log((x as string).length);

# Casting doesn't actually change the type of the data within the variable
let x: unknown = 1;
console.log((x as string).length); # returns undefined (as won't change 1 into "1")
// console.log((2 as string).length); # This will give error as it's a number directly

# Force casting
# To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
console.log((2 as unknown as string).length); # convert number to unknown first (if intentional)-> STILL GIVE ERROR (JAVASCRIPT) CANNOT USE LENGTH AS IN NUMBER

2. Casting with <>

const x: number | string = "3";
# below both are same
console.log((x as string).toUpperCase());
console.log((<string>x).toUpperCase());

#  Here x is number so type conversion will give error (to solve this first convert them into unknown)
const x: number | string = 3;
// console.log((x as string).toUpperCase()); # Error TYPESCRIPT
// console.log((<string>x).toUpperCase()); # Error TYPESCRIPT
console.log((x as unknown as string).toUpperCase()); # Error JAVASCRIPT ( NO TYPESCRIPT)
console.log((<string>(<unknown>x)).toUpperCase()); # Error JAVASCRIPT ( NO TYPESCRIPT)

```

- TypeScript Classes
  - TypeScript adds types and visibility modifiers to JavaScript classes.

```bash
1. Members: Types

# The members of a class (properties & methods) are typed using type annotations, similar to variables.
class Person {
  name: string;
}
const person = new Person();
person.name = "Jane";

2. Members: Visibility

# There are three main visibility modifiers in TypeScript.
    #1. public - (default) allows access to the class member from anywhere
    #2. private - only allows access to the class member from within the class
    #3. protected - allows access to the class member from itself and any classes that inherit it

class Testing {
  public name: string; # You need to write this to write it in construction
  private age: number; # this can't be access outsite this class
  public constructor(name: string, age: number) { # NO NEED TO WRITE PUBLIC AS IT'S DEFAULT
    this.name = name;
    this.age = age;
  }
  public get getInfo1() { # NO NEED TO WRITE PUBLIC AS IT'S DEFAULT
    return `My name is ${this.name}, and my age is ${this.age}`;
  }
  public getInfo2() {
    return `My name is ${this.name}, and my age is ${this.age}`;
  }
  private getInfo3() {
    return `My name is ${this.name}, and my age is ${this.age}`;
  }
}
const myName = new Testing("Mahesh", 28);
// console.log(myName.age);  # age is private so can't be call here
console.log(myName.name);
console.log(myName.getInfo1);
console.log(myName.getInfo2());
// console.log(myName.getInfo3()); # getInfo3 is private so can't be called here


# Parameter Properties
# TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

# This line declares and initialize the properties -> This line is same as below 5 lines
public constructor(private name: string, public age: number) {}

# NO NEED TO WRITE THIS 5 LINES NOW
    # public name: string;
    # private age: number;
    # public constructor(name: string, age: number) {
    # this.name = name;
    # this.age = age;

3. Readonly
# readonly keyword can prevent class members from being changed.

class Person {
  private readonly name: string; # This is readonly

  public constructor(name: string) {
    # name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  set changeName(newName: string) {
    // this.name = newName; # This will give error as name property is readonly
  }
}
const person = new Person("Jane");
console.log(person.getName());

4. Inheritance: Implements
# Interfaces can be used to define the type a class must follow through the implements keyword.

interface GetNameType {
  getName: () => string; # the getName method will return string. It will be in GetNameType
  greet: () => string;
}
type NewGreet = { # You can use type or interface here
  morningGreet: () => string;
}

# Use implements to add interface and use ,(comma) to add multiple interface
class Naming implements GetNameType, NewGreet {
  constructor(protected readonly name: string) {} # Use protected as it needed in different class
  getName(): string { # Can skip string as it gets infer
    return this.name;
  }
  greet() {
    return `Hello!, ${this.name}`;
  }
  morningGreet() {
    return `Morning, ${this.name}`;
  }
}
const myName = new Naming("Mahesh");

console.log(myName.getName());      # Mahesh
console.log(myName.greet());        # Hello!, Mahesh
console.log(myName.morningGreet()); # Morning, Mahesh

5. Inheritance: Extends
# Classes can extend each other through the extends keyword.
# A class can only extends ONE OTHER CLASS.
6. Override
# When a class extends another class, it can replace the members of the parent class with the same name.
# The override function is default (means you can change the parent function without writing the override keyword). To force it to be used when overriding, Use the setting noImplicitOverride in tsconfig(maybe)

# You can avoid such types as TS can infer it
interface GetSquare {
  fullInfo: () => string;
}

class Square extends Naming implements GetSquare {
  constructor(private readonly length: number, name: string) {
    super(name); # To add property from extended class use super
  }
  # The getName() function has override the function(with same name) from extended Naming class
  override getName(): string {
    return ` Overriding the getName() function from Naming class`;
  }

  morningGreet() {
    return `Morning, ${this.name}`;
  }
  get squareValue() {
    return this.length * this.length;
  }
  fullInfo() {
    return `total length is ${this.squareValue}`;
  }
}

const myName = new Square(12, "Mahesh");
console.log(myName.getName());
console.log(myName.morningGreet());
console.log(myName.squareValue);
console.log(myName.fullInfo());

7. Abstract Classes
# Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

# NOT DOING IT NOW..

```

- TypeScript Basic Generics

  - Generics in TypeScript allow you to create reusable components that work with a variety of types rather than a single type.

  - They provide a way to create functions, classes, and interfaces that can operate with different data types while maintaining type safety.

  - They enable you to write flexible and reusable code.

- Generics: Allow for type-safe and reusable code components.
- Generic Functions: Define functions that work with any type.
- Generic Classes: Create classes that operate with various types.
- Generic Interfaces and types: Describe objects with properties of different types.
- Generic Constraints: Restrict generics to types with specific properties.

```bash

1. Generic Functions # Define functions that work with any type.

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>("hello", 42));
console.log(createPair<number, number>(2, 42));
console.log(createPair<string, boolean>("Are you good", false));
console.log(createPair("ok", 2)); # WORKS FINE, Type can be infer by typescript
console.log(createPair("ok", 2, 3)); # Will give error as only 2 parameters are allowed
console.log(createPair("ok")); # Will give error as only 2 parameters are allowed

2. Generic Classes # Create classes that operate with various types.

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }
  public getValue(): T | undefined {
    return this._value;
  }
  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>("myNumber");
let value2 = new NamedValue<string>("myNumber");
value.setValue(10);
value2.setValue("OK");
console.log(value.toString()); // myNumber: 10
console.log(value2.toString()); // myNumber: OK

3. Generic Interfaces and types # Describe objects with properties of different types.

type ObjType<T, U> = { name: T; age: U };
interface NewObjType<S, T> {
  firstName: S;
  lastName: S;
  age: T;
}

const obj: ObjType<string, number> = { name: "Mahesh", age: 3 };
const newObj: NewObjType<string, number> = {
  firstName: "Mahesh",
  lastName: "Kumar",
  age: 28,
};

# Default Value ::

# Generics can be assigned default types which apply if no other value is "specified" or "inferred".

type ObjType<T = string, U = number> = { name: T; age: U };
const obj: ObjType = { name: "Mahesh", age: 3 };
const obj: ObjType<string, string> = { name: "Mahesh", age: "three" }; # you can change the default

4. Generic Constraints(Extends)
# Constraints can be added to generics to limit what's allowed.
# The constraints make it possible to rely on a more specific type when using the generic type.

# example 1
function createLoggedPair<S extends string | number, T extends string | number>(
  v1: S,
  v2: T
): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}
createLoggedPair("Hello", "Fine");
createLoggedPair("Hello", 101);
// createLoggedPair("Hello", true); # Error as boolean doesn't exists on type

#Example 2
# Constrain T to types that have a length property (IF HAVE x.length property)
function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}
logLength("Hello");        # Works, string has a length property
logLength([1, 2, 3]);      # Works, array has a length property
// logLength(42);          # Error: number doesn't have a length property

# CAN ADD INTERFACE/TYPES FOR IT
interface Lengthwise {
  length: number;
}
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
logLength("Hello");
```

- TypeScript Utility Types
  - TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
  - [Partial, Required, Record, Omit, Pick, Exclude, ReturnType, Parameters, ReadOnly]

```bash
1. Partial # It changes all the properties in an object to be optional.

interface NewId {
  one: number;
  two: number;
}
const obj1: NewId = { one: 2, two: 4 };
const obj2: Partial<NewId> = { one: 2 }; # Now all obj are optional

2. Required # It changes all the properties in an object to be required.

interface NewId {
  one?: number;
  two?: number;
}
const obj1: NewId = { one: 2 };
const obj2: Required<NewId> = { one: 2, two: 4 }; # All are required/compulsory

3. Record # It is a shortcut to defining an object type with a specific key type and value type.
# Record<string, number> is equivalent to { [key: string]: number } (tuples)
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

4. Omit # It removes keys from an object type. -> [only for object type]

interface Person {
  name: string;
  age: number;
  location?: string;
}
# age and location are removed from the type
const bob: Omit<Person, "age" | "location"> = { name: "Bob" };

5. Pick # It removes all but the specified keys from an object type.

interface Person {
  name: string;
  age: number;
  location?: string;
}
# Except age all other properties are removed
const bob: Pick<Person, "age"> = { age: 23 };

6. Exclude # It removes types from a union.

type Primitive = string | number | boolean;
const value1: Exclude<Primitive, string> = true;
const value2: Exclude<Primitive, string> = 234;
// const value3: Exclude<Primitive, string> = "abc"; # It will give error as string has been excluded from the union type

7. ReturnType # It extracts the return type of a function type.

type PointGenerator = () => { x: number; y: number };
# It will give type of what a function will return
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
console.log(point);

8. Parameters # It extracts the parameter types of a function type as an array.

type Finding = (x: string, y: number) => number;
type Finding2 = (p: { x: string; y: number }) => number;

const value1: Parameters<Finding> = ["name", 8];
const value2: Parameters<Finding2> = [{ x: "name", y: 8 }];

# How both are different in writing a function
const find: Finding = (x, y) => {
  return y + x.length;
};
const find2: Finding2 = (p) => {
  return p.y + p.x.length;
};
const find3: Finding2 = ({ x, y }) => {
  return y + x.length;
};

console.log(find("hello", 5)); // Output: 10
console.log(find2({ x: "hello", y: 5 })); // Output: 10
console.log(find3({ x: "hello", y: 5 })); // Output: 10

9. Readonly
# It is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
# Keep in mind TypeScript will prevent this at compile time, but in theory since it is compiled down to JavaScript you can still override a readonly property.
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
// person.name = "Israel"; # This will give error as it's readonly

```

- TypeScript Keyof
  - It is a keyword in TypeScript which is used to extract the key type from an object type.

```bash
1. keyof with explicit keys
# It is used to create a union type of the keys of a given object type.

# Example 1
interface Person {
  name: string;
  age: number;
  location: string;
}
type PersonKeys = keyof Person; # 'name' | 'age' | 'location'

const myPerson: PersonKeys = "age"; # You can only write any one value from the three

# Example 2
interface Person {
  name: string;
  age: number;
}
# `keyof Person` means "name" | "age"
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27,
};
printPersonProperty(person, "name"); # Can only write "name" or "age" here

2. keyof with index signatures ->[NOT IMP MAY BE]
# keyof can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown };
# `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
console.log(createStringPair(22, "OOOOKKK")); // { '22': 'OOOOKKK' }
console.log(createStringPair("abc", "OOOOKKK")); // { '22': 'OOOOKKK' }
// console.log(createStringPair(true, "OOOOKKK")); // Error

# key must be 'string', 'number', 'symbol' and that too gets converted into string(?)
# In JavaScript, when you use a number as an object key, it is internally converted to a string. This behavior causes TypeScript to include both string and number in the keyof type.
```

- TypeScript Null & Undefined
  - By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.

```bash
# null and undefined are primitive types and can be used like other types, such as string.
let value: string | undefined | null = null;
value = 'hello';
value = undefined;

```
