- WHAT IS REACT?

  - React is a JavaScript library for building user interfaces.
  - React is used to build single-page applications.
  - React allows us to create reusable UI components.
  - React creates a VIRTUAL DOM in memory.
    - Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
  - React's goal is in many ways to render HTML in a web page.
  - React renders HTML to the web page by using a function called createRoot() and its method render().

- Virtual DOM (Document Object Model)

  - It's nothing but the replica of the original DOM
  - After any changes in the virtual DOM, first the vdom will compare the changes with the odom and then only that changes will be updated and not the whole DOM

- React life cycle method -> [ You can work with them using the useEffect hook]
  - It's like cycle from birth to death
  - When your component 1st get created it will get attached to the dom and that is called the componentDidMount -> [By writing inside the useEffect]
  - After the complition of the work of the component you can remove them from the dom and thats method is called componentWillUnmount -> [By returning from the useEffect]

```bash

```

- React JSX
  - JSX allows you to write HTML tags inside the JavaScript code:
  - The HTML code must be wrapped in ONE top level element.
    - you can use a "fragment"(<></>.) to wrap multiple lines.
  - When JSX is rendered, it translates className attributes into class attributes.
  - THERE ARE ONLY 3 RULES FOR JSX:
    1.  Return a single root element
    2.  Close all the tags
    3.  camelCase most of the things!

```bash
1. Expressions in JSX
# write expressions inside curly braces { }.
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

2. Multiple lines in JSX
# Use parentheses
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

3. Conditions - if statements

# React supports if statements, but not inside JSX.
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myElement = <h1>{text}</h1>;

# use a ternary expression instead of JSX
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

```

- React Components
  - When creating a React component, the component's name MUST start with an upper case letter.
  - Two types: 1> Class components and 2> Function components
    - In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks

```bash
-> Function Component

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

# Rendering a Component
<Car /> # uses similar syntax as normal HTML

# Props (properties)
# Props are like function arguments, and you send them into the component as attributes.
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}
<Car color="red"/>


# Components in Components
# We can refer to components inside other components:
function Car() {
  return <h2>I am a Car!</h2>;
}
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car /> # This Car component will be render in the Garage component
    </>
  );
}

# Components in Files

# file1.js
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
export default Car;

#file2.js
import Car from './Car.js';
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car /> # This Car component will be render in the Garage component
    </>
  );
}

```

- React Props
  - Props are arguments passed into React components.
  - Props are passed to components via HTML attributes.

```bash
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      // <Car brand="Ford" />
       <Car brand={ carName } /> # You can send variable inside the curly brackets
    </>
  );
}

```

- React Events
  - React has the same events as HTML: click, change, mouseover etc.
  - React events are written in camelCase syntax: (onClick instead of onclick.)
  - React event handlers are written inside curly braces: (onClick={shoot})

```bash

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };
  return <button onClick={shoot}>Take the shot!</button>;
}


# Passing Arguments : Send value as a parameter to the function, using arrow function
function Football() {
  const shoot = (a) => {
    alert(a);
  };
  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}

# React Event Object:: (e)
# Event handlers have access to the React event that triggered the function.

function Football() {
  const shoot = (a) => {
    alert(a.type);
    # 'a' represents the React event that triggered the function, in this case the 'click' event
  };

  return <button onClick={(event) => shoot(event)}>Take the shot!</button>;
}

```

- React Conditional Rendering
  - if Statement
  - Logical && Operator
  - Ternary Operator

```bash
1. if Statement

# Two function will render conditionally
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
# prop will decide which function to run
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
# MissedGoal will run
<Goal isGoal={false} />


2. Logical && Operator

# If cars have length only then render
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      # If (cars.length) true then render
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}
const cars = ['Ford', 'BMW', 'Audi'];
<Garage cars={cars} />

3. Ternary Operator

# You can directly use ternary operator inside the return
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

```

- React Lists
  - The JavaScript map() array method is generally the preferred method to render lists

```bash
# Keys
# Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
# Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

```

- React Forms
  - In HTML, form data is usually handled by the DOM.
  - In React, form data is usually handled by the components.
  - When the data is handled by the components, all the data is stored in the component state.
  - You can control changes by adding event handlers in the onChange attribute.

```bash

1. Multiple Input Fields
# Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

2. Textarea

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}

3. Select

# the selected value in the drop down list was defined with the selected attribute:(optional)
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo" selected>Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

```

- React Router
  - React Router is the most popular solution for page routing.

```bash

1. Main Page

# We wrap our content first with <BrowserRouter>.
# Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
# <Route> can be nested. The first <Route> has a path of / and renders the Layout component.
# The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
# The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
# Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes> # Can have multiple routes
        <Route path="/" element={<Layout />}> # All other routes will inherit it
          <Route index element={<Home />} /> # can use path="/" but index is good
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> # If user type undefined url
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

2. Pages / Components

# The Layout component has <Outlet> and <Link> elements.
# The <Outlet> renders the current route selected.
# <Link> is used to set the URL and keep track of browsing history.
# Anytime we link to an internal path, we will use <Link> instead of <a href="">.
# The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> # This navbar will be available for all the pages

      <Outlet /> # This will render the current route
    </>
  );
};

export default Layout;

```

- React Memo
  - Using memo will cause React to skip rendering a component if its props have not changed.
  - This can improve performance.

```bash

# index.js
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

# Todos.js
import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos); # HERE THE MEMO WILL PREVENT UNNECESSORY RENDERING OF THIS COMP
```

- Styling React Using CSS
  - There are many ways to use the CSS in react
  - You can also create and import the CSS module
  - USE TAILWIND FOR IT

```bash
-> Inline Styling

# camelCased Property Names: Use backgroundColor instead of background-color:

const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

# JavaScript Object: Create a style object named myStyle
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

```

- React Hooks
  - Hooks allow us to "hook" into React features such as state and lifecycle methods.
  - You must import Hooks from react.
  - There are 3 rules for hooks:
    - Hooks can only be called inside React function components.
    - Hooks can only be called at the top level of a component.
    - Hooks cannot be conditional

```bash

```

- React useState Hook
  - The React useState Hook allows us to track state in a function component.

```bash

# Initialize useState::
  # we are destructuring the returned values from useState.
  # The first value, color, is our current state.
  # The second value, setColor, is the function that is used to update our state.
  # we set the initial state to "red": useState("red")
# Read State::
  # Now the value of color is "red" and We can now include our state anywhere in our component.
# Update State::
  # To update our state, we use our state updater function.
  # We should never directly update state. Ex: color = "red" is not allowed.

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

# Updating Objects and Arrays in State::
  # When state is updated, the entire state gets overwritten.
  # What if we only want to update the color of our car?
  # If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
  # We can use the JavaScript spread operator to help us.

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
}

```

- React useEffect Hooks
  - The useEffect Hook allows you to perform side effects in your components.
  - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  - useEffect accepts two arguments. The second argument is optional.
  - useEffect(()=>{}, [ dependency])

```bash
# useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
# We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

#-1> No dependency passed:
useEffect(() => {
  //Runs on every render
});

#-2> An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

#-3> Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

# EXAMPLE->
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here to run it only once

  return <h1>I have rendered {count} times!</h1>;
}

# Effect Cleanup::
  # Some effects require cleanup to reduce memory leaks.
  # Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
  # We do this by including a return function at the end of the useEffect Hook.

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); # Note: To clear the timer, we had to name it.
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

```

- React useContext Hook
  - React Context is a way to manage state globally.
  - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

```bash
# The Problem::
  # State should be held by the highest parent component in the stack that requires access to the state.
  # To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
  # To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
# The Solution
  # The solution is to create context.
  # we'll use the Context Provider to wrap the tree of components that need the state Context.
  # Wrap child components in the Context Provider and supply the state value.
  # Now, all components in this tree will have access to the user Context.
  # FIRST WRAP MAIN COMPONENT IN CONTEXT PROVIDER AND ALL CHILD CAN GET ACCESS OF STATE.

# EXAMPLE->

# MAIN COMPONENT -> USE "createContext" FROM REACT TO CREATE A CONTEXT PROVIDER
import { useState, createContext } from "react";

const UserContext = createContext()

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

#LAST COMPONENT -> IT GET VALUE FROM THE "UserContext" from "useContext"
import { useState, UserContext, useContext } from "react";
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

```

- React useRef Hook
  - The useRef Hook allows you to persist values between renders.
  - It can be used to store a mutable value that does not cause a re-render when updated.
  - It can be used to access a DOM element directly.

```bash
1. Does Not Cause Re-renders
  # If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
  # To avoid this, we can use the useRef Hook.

import { useState, useEffect, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0); # set the initial value: useRef(0).

  useEffect(() => {
    # If we use useState here then render happens > useEffect executes > useState will render again > useEffect executes again > cycle goes on
    count.current = count.current + 1;
  }); # This useEffect will runs everytime the page renders

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} # Pressing any key will cause render
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

2. Accessing DOM Elements
  # In general, we want to let React handle all DOM manipulation.
  # But there are some instances where useRef can be used without causing issues.
  # In React, we can add a ref attribute to an element to access it directly in the DOM.

# This will focus the input box whenever button clicked
import { useRef } from "react";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus(); # Focus the input element
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

3. Tracking State Changes
# The useRef Hook can also be used to keep track of previous state values.

# When the input value changes the state is first saved to useRef and then changes in useState
# In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]); # When the input value changes it first get stored into useRef

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} #  This will change the input value
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

```

- React useReducer Hook
  - The useReducer Hook is similar to the useState Hook.
  - In React, useReducer is a hook that is useful for managing complex state logic in functional components

```bash
# The useReducer Hook accepts two arguments. # useReducer(<reducer>, <initialState>)
# The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
# The useReducer Hook returns the current state and a dispatchmethod.

import { useReducer } from "react";

# This is initialState
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

# This is the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  # Same as useState, todos is values and dispatch is function
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}


```

- React useCallback Hook

  - The React useCallback Hook returns a memoized callback function.
  - Think of memoization as caching a value so that it does not need to be recalculated.
  - This allows us to isolate resource intensive functions so that they will not automatically run on every render.
  - The useCallback Hook only runs when one of its dependencies update.
  - This can improve performance.

```bash
# main component
import { useState, useCallback } from "react";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  # Callback, this will only render when the todo changes
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

# Todo component
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
# Here memo won't stop from rerendering as the "referance value" changes
export default memo(Todos);
# ########################################################
# Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. -- AND "addTodo" FUNCTION CHANGE "addTodo" PROP
# ########################################################

```

- React useMemo Hook
- The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

```bash
import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  # This saves the calculation value until the count dependency changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

```

- React Custom Hooks
  - Hooks are reusable functions.
  - When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
  - Custom Hooks start with "use". Example: useFetch.

```bash

# useFetch.js:
import { useState, useEffect } from "react";

# It create a custom hook that can be used in many components without writing this logic again
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
export default useFetch;

# index.js:
import useFetch from "./useFetch";

const Home = () => {
  # This uses the custom fetch logic writing to get data
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

```
