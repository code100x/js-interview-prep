- NODEJS

- It's free and open source server environment, which runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- it allows you to run JavaScript on the server.
- Node should not be used to cpu intensive application, it should be used for data intensive and real time application.- Good for I/O (input/output) operations.
- In node there is no window objects. It's only available for browser.
- There are some global objects for js, which works for both node and browser like console, setTimeout, etc.
- In browser we have window object, and in node we have global object. So we can prefix every thing in it - (You can remove window or global from prefix)
- Eg. Window.console.log() - In browser console.log is prefixed by window.
- Global.console.log() - In node it is prefixed by global.

  - Variable and function, which are defined In nodejs has file scope (and not the global scope) and cannot be called with global.
  - But can be accessed by window in browser
  - Eg. Var x = 1;
  - Global.x will give undefined
  - Window.x will give 1
    How docker is different from virtual machine

- async function
  - After the result is ready it put msg to event queue.
  - Node is Continuously monitoring this even queue.

```bash
# MODULE WRAPPER FUNCTION
# node always wrap your code of a file inside a self invoking function

# index.js
const x = 1;
console.log("OK");

# the above code in a file gets converted into:
(function(export, require, module, __filename, __dirname) {
    const x = 1;
    console.log("OK");
})

```

- Modules

```bash
- ES2015 official proposal attempts to align the management of ECMAScript Modules in both server-side and browser environments.

- Node.js has two module systems: CommonJS modules and ECMAScript modules(ES modules).
    - CommonJS uses synchronous loading, while ES Modules uses asynchronous loading.
    - CommonJS uses the require function to import modules, while ES Modules uses the import statement.
    - In CommonJS, once a module is loaded, it is cached in memory. ES Modules does not cache modules by default.
    - CommonJS doesnt supports dynamic imports, while ES Modules supports dynamic imports.
    - commonJS is used for server-side development, while ES Modules is used for both server and client side development
    - To load an ES module, set "type": "module" in the package.json or use the .mjs extension

- modules are like JS library (react, threeJs, socket.io) - wikipedia
- modules are set of functions you want to include in your application.

- The below objects are available in all modules.[THEY ARE LOCAL TO EACH MODULE, THEY ARE THE PARAMETER OF MODULE WRAPPER FUNCTION] - They only exists in commonJS modules and not in ES modules
    - __dirname
    - __filename
    - exports
    - module
    - require()

console.log(__dirname);     # /home/mvp/Coding/cohort1/js1/notes
console.log(__filename);    # /home/mvp/Coding/cohort1/js1/notes/ideas.js

# In ES modules you need to do a workaround to get the __filename and __dirname functionality like so:
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

```

- Node.js has many built-in modules. - IT CONTAINS MANY GLOBAL OBJECTS AND BUILT-IN MODULES
  - fs, os, path, events, http, https, url, crypto, buffer(GLOBAL OBJECT), process, stream, etc.
    - https://nodejs.org/docs/latest/api/
    - https://www.w3schools.com/nodejs/ref_modules.asp

```bash

1. path -- (provides utilities for working with file and directory paths)

# FOR MORE METHODS
    - https://nodejs.org/docs/latest/api/path.html (official)
    - https://www.w3schools.com/nodejs/ref_path.asp

# const path = require("path"); # YOU CAN ALSO USE CommonJS module BUT ALWAYS TRIES TO USE ES
import { resolve, parse, basename, extname } from "path";

console.log(path.parse(__filename)); # {root: '/', dir: '/home/mvp/Coding/cohort1/js1/notes', base: 'ideas.js', ext: '.js', name: 'ideas' }
console.log(path.basename(__dirname)); #"notes" -> CAN ALSO PASS OPTIONAL PARAMETERS
console.log(path.extname(__dirname)); #""
console.log(path.extname(__filename)); #".js"
console.log(path.resolve(__filename)); # '/home/mvp/Coding/cohort1/js1/notes/ideas.js'

# resolve() method creates absoulte path from right to left until an absolute path is constructed.
path.resolve("/a", "b", "c");   #    C:\a\b\c
path.resolve("/a", "/b", "c");  #    C:\b\c
path.resolve("/a", "/b", "/c"); #    C:\c

2. os -- (operating system-related utility methods and properties)

# FOR MORE METHODS
    - https://nodejs.org/docs/latest/api/os.html (official)
    - https://www.w3schools.com/nodejs/ref_os.asp

const os = require("os");
console.log( os.arch()); # x64 => Returns the operating system CPU architecture
console.log( os.hostname()); # mahesh5464 => Returns the hostname of the operating system
console.log( os.freemem()); # 3112697856 => Returns the number of free memory of the system
console.log( os.totalmem()); # 8181628928 => Returns the number of total memory of the system
console.log( os.cpus()); # [{},{}] => Returns an array containing information about the computer's CPUs
console.log( os.networkInterfaces()); # [{},{}] => Returns the network interfaces that has a network address
console.log( os.platform()); # linux => Returns information about the operating system's platform
console.log( os.uptime()); # 605496.17 => Returns the uptime of the operating system, in seconds
console.log( os.userInfo()); # { uid: 1000, gid: 1000, username: 'mvp', homedir: '/home/mvp', shell: '/bin/bash' } => Returns information about the current user

3. fs -- (enables interacting with the file system)
# Almost all method have their corresponding sync function(eg. fs.readFileSync()) (no callback in such function). But always tries to use async function (eg. fs.readFile())

const fs = require("fs");
const path = require("path");
const destinationPath = path.resolve(__filename); # You can manually write any file path

# I--> fs.readFile() - [To read a file]
# if no encoding (utf-8) then raw buffer is returned
fs.readFile(destinationPath, "utf-8", (err, data) => { # first parameter is err and then data
  if (err) throw err; # if destinationPath is not file but an folder then error will be shown
  console.log(data); # data in the destinationPath file will be shown
});

# First "One!" will be printed and then the data, as fs is an async function ? [use]
fs.readFile("./readme.md", "utf8", (data) => console.log(data));
console.log("One!"); # This will run first  then fs.readfile

# readFileSync() is syncronous (ie. it will wait until it gets the value)
let x = fs.readFile("a.txt")  # It will throw an arror as x don't know the value
let x = fs.readFileSync("a.txt")  # It will work as x know the value


# II --> fs.mkdir() - [To create a new folder]
const destinationPath = path.resolve(__dirname, "abc.txt"); # You can manually write any file path
fs.mkdir(destinationPath); # It will create a new directory (folder and not file)

# III --> fs.rename() - [To rename a file]
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.writeFile() -- [To write a file by deleting existing file content]
fs.appendFile() -- [To write a file by appending and not deleting anything]
fs.unlink() -- [To delete a file]

4. Events
# Inside this events module we get a class called Event-Emitter

const EventEmitter = require("events");
const emitter = new EventEmitter();
# There are many methods but most of the time we only use two of this methods
# 1. emit (to raise an event) and on(addListener) (to listen to the raised event)

# THE ORDER IS IMPORTANT EMIT WILL ITERATE OVER ALL THE KNOWN LISTENER AND CALL THEM SYNCRONOUSLY [SO FIRST CREATE A LISTNER (.ON) AND THEN EMITTER (.EMIT)]

//--> Register a listener. "on" and "addListener" both are almost same so use on
emitter.on("messageLogged", () => {
  console.log("m");
}); # It takes two argument 1. name of the event and 2. callback function (actual listener)

//--> Raise an event
emitter.emit("messageLogged"); # It will create a event with this "messageLogged" name
# nothing will happen with emit as we had not added any listener for this event. Who can constantly listen to this specific event
# An listener is an event that will be called when that event is raised (created)

# >>>> USING ARGUMENTS
emitter.on("myInfo", (e) => {
  console.log("Info", e); # Info { id: 1, url: 'http://' }
});
emitter.on("myInfo", ({ id, url }) => {
  console.log("Info", id, url); # Info 1 http://
});

# ADDING ARGUMENTS TO THE EMIT (TO SEND ANY INFO TO ALL LISTENER)
# emitter.emit("myInfo", 1, "http://"); # CAN SEND THIS WAY BUT IT DOESN'T GIVE PROPER CONTEXT
emitter.emit("myInfo", { id: 1, url: "http://" }); # SEND THEM AS OBJECT

# Problem with this approch is that when emiting or logging from different file it won't work as both will have their own emitter class so create a class with additional features and export it
# logger.js
const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}
module.exports = Logger;

# Import it.
# app.js
const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("m", arg);
});
logger.log("ok");

```

- Node.js Upload Files (using formidable)

```bash

```

- EXPRESS.JS

1. ROUTING

```bash
# I -->  VERY BASIC ROUTING
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! World");
});

app.listen(3000);

# II -->

# GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
# POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
# MIDDLEWARE -> BELOW HANDLER WILL BE EXECUTED FOR ALL THE REQUEST (GET, PUT, POST,..) TO THE "/secret" ROUTE
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next(); # pass control to the next handler
})


---------------> ROUTE PATHS

# Route paths can be strings, string patterns, or regular expressions.
    # The characters ?, +, *, and () are subsets of their regular expression counterparts.
    # The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
    # If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]).
    # For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.

# match requests to root route, /
app.get('/', (req, res) => { res.send('routing') })
# match requests to /about.
app.get('/about', (req, res) => { res.send('routing') })
#  match requests to /random.text. --> DOT IS CONSIDER AS PART OF THE STRING
app.get('/random.text', (req, res) => { res.send('routing') })

# STRING PATTERNS EXAMPLES
# match acd and abcd. --> B IS OPTIONAL
app.get('/ab?cd', (req, res) => { res.send('routing') })
# match /abe and /abcde. --> CD IS OPTIONAL
app.get('/ab(cd)?e', (req, res) => { res.send('routing') })
# match abcd, abbcd, abbbcd, and so on. --> CAN ADD B FOR ANY NUMBER OF TIME (B+)
app.get('/ab+cd', (req, res) => { res.send('routing') })
# match abcd, abxcd, abRANDOMcd, ab123cd, and so on. -> CAN ADD ANY ALPHNUMERIC VALUE BETWEEN AB AND CD (B*C)
app.get('/ab*cd', (req, res) => { res.send('routing') })

# REGEX EXAMPLE
# match anything with an “a” in it. --> ANY STRING WITH A
app.get(/a/, (req, res) => { res.send('routing') })
# match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on. --> ENDS WITH FLY
app.get(/.*fly$/, (req, res) => { res.send('routing') })

# ----> Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
#
Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }


---------------> ROUTE HANDLERS
# app.get(path, callback, callback, callback)
# You can provide multiple callback functions that behave like middleware to handle a request.
# But you need to pass next(). if you want to pass to next callback
# The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. ????????????? --> WHAT IS NEXT('ROUTE')

# I-> A single callback function can handle a route.
app.get("/example/a", (req, res) => {
  res.send("Hello from A!");
});

# II-> More than one callback function can handle a route (make sure you specify the next object).
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

# III-> An array of callback functions can handle a route.
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};
const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};
const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

# IV-> A combination of independent functions and arrays of functions can handle a route.
const cb0 = function (req, res, next) {
  console.log('CB0') # This is printed 1st
  next(); # goes to next route
}
const cb1 = function (req, res, next) {
  console.log('CB1') # This is printed 2nd
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...') # This is printed 3rd
  next()
}, (req, res) => {
  res.send('Hello from D!') # This is executed the response is send
})


---------------> RESPONSE METHODS
# Send a response object(res) to the client to terminate the request-response cycle
# If none of these methods are called from a route handler, the client request will be left hanging.

res.download()     - Prompt a file to be downloaded.
res.end()          - End the response process.
res.json()         - Send a JSON response.
res.jsonp()        - Send a JSON response with JSONP support.
res.redirect()     - Redirect a request.
res.render()       - Render a view template.
res.send()         - Send a response of various types.
res.sendFile()     - Send a file as an octet stream.
res.sendStatus()   - Set the response status code and send its string representation as the response body.


---------------> APP.ROUTE()
# You can create chainable route handlers for a route path by using app.route().

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })



---------------> EXPRESS.ROUTER()
# Use the express.Router class to create modular, mountable route handlers.

# The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

1. -> # birds.js

const express = require('express')
const router = express.Router()

# middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

# define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
# define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
module.exports = router


2. -> # index.js

const birds = require('./birds')
# ...
app.use('/birds', birds)

# The app will now be able to handle requests to /birds and /birds/about, as well as call the timeLog middleware function that is specific to the route.

# #########################################################

# [fs+path+express] HERE YOU WILL SEE ARRAY OF FILES WHICH ARE PRESENT INSIDE THE FILES FOLDER
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/files", function (req, res) {
  fs.readdir(path.join(__dirname, "./files/"), (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve files" });
    }
    res.json(files);
  });
});
app.listen(3000, () => console.log("ON 3000"));
# http://localhost:3000/files - HAVE FILES INSIDE FILES FOLDER


# first using path module, will get right path of the file then using fs module will read that file and finally, will display it to the website
app.get("/files/:filename", function (req, res) {
  const fileName = req.params.filename;
  const filePath = path.resolve(__dirname, `files/${fileName}`); # as files are inside this
  fs.readFile(filePath, "utf8", (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve files" });
    }
    res.json(files);
  });
});
app.listen(3000, () => console.log("ON 3000"));
# http://localhost:3000/files/a.txt - HAVE A.TXT INSIDE FILES FOLDER

```

- MIDDLEWARES

  - Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
  - The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

  - Middleware functions can perform the following tasks:

    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware in the stack.

  - If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

```bash

# The middleware function myLogger simply prints a message, then passes on the request to the next middleware function in the stack by calling the next() function.

const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger) # Middleware is called here

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3000)
# The order of middleware loading is important: middleware functions that are loaded first are also executed first.
# If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

-> An Express application can use the following types of middleware:
    -Application-level middleware
    -Router-level middleware
    -Error-handling middleware
    -Built-in middleware
    -Third-party middleware

1. Application-level middleware

# I. EXAMPLE
# This example shows a middleware function with no mount path.
# The function is executed every time the app receives a request.
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

# II. EXAMPLE
# This example shows a middleware function mounted on the /user/:id path.
# The function is executed for any type of HTTP request on the /user/:id path.
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', (req, res, next) => {
  res.send('USER')
})

# III. EXAMPLE
# Here is an example of loading a series of middleware functions at a mount point, with a mount path.

# This example shows a middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.
app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

# This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})

# IV. EXAMPLE
# To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

# This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
app.get('/user/:id', (req, res, next) => {
  # if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  # otherwise pass the control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  # send a regular response
  res.send('regular') # THIS WILL ONLY EXECUTED, IF NEXT() IN ABOVE EXECUTED
})

# THIS WILL ONLY BE EXECUTED WHEN THE PARAMS.ID === 0 AND NEXT('ROUTE') IS CALLED
# handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})

# V. EXAMPLE
# Middleware can also be declared in an array for reusability.

# This example shows an array with a middleware sub-stack that handles GET requests to the /user/:id path
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}
function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}
const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})


2. Router-level middleware

# Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
const router = express.Router()
# Load router-level middleware by using the router.use() and router.METHOD() functions instead of app.use() and app.METHOD()


#--> The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:
const express = require('express')
const app = express()
const router = express.Router()

# a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

# a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

# a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  # if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  # otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  # render a regular page
  res.render('regular')
})

# handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

# mount the router on the app
app.use('/', router)


3. Error-handling middleware

# Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):
# Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function.
# Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

4. Built-in middleware

# Express has the following built-in middleware functions:
    express.static serves static assets such as HTML files, images, and so on.
    express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
    express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+


5. Third-party middleware

# Use third-party middleware to add functionality to Express apps.
# Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.
# The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

# $ npm install cookie-parser
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

# load the cookie-parsing middleware
app.use(cookieParser())

# FOR MORE THIRD-PARTY MIDDLEWARE -> https://expressjs.com/en/resources/middleware.html
```

- Error Handling
  - Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously.
  - Express comes with a default error handler so you don’t need to write your own to get started.

```bash

1. CATCHING ERRORS

# Errors that occur in synchronous code inside route handlers and middleware require no extra work. If synchronous code throws an error, then Express will catch and process it. For example:
app.get('/', (req, res) => {
  throw new Error('BROKEN') # Express will catch this on its own.
})

# For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. For example:
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) # Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})

# If you pass anything to the next() function (except the string 'route'), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

# You must catch errors that occur in asynchronous code invoked by route handlers or middleware and pass them to Express for processing. For example:
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})

# Use promises to avoid the overhead of the try...catch block or when using functions that return promises. For example:
app.get('/', (req, res, next) => {
  Promise.resolve().then(() => {
    throw new Error('BROKEN')
  }).catch(next); # Errors will be passed to Express. # PASS NEXT AS A CALLBACK
})

# Whichever method you use, if you want Express error handlers to be called in and the application to survive, you must ensure that Express receives the error.


2. DEFAULT ERROR HANDLER

# Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.
# If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler

# When an error is written, the following information is added to the response:
    The res.statusCode is set from err.status (or err.statusCode). If this value is outside the 4xx or 5xx range, it will be set to 500.
    The res.statusMessage is set according to the status code.
    The body will be the HTML of the status code message when in production environment, otherwise will be err.stack.
    Any headers specified in an err.headers object.


3. Writing error handlers

# Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next). For example:

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

# You define error-handling middleware last, after other app.use() and routes calls; for example:

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use((err, req, res, next) => {
  # logic
})

# Calls to next() and next(err) indicate that the current handler is complete and in what state. next(err) will skip all remaining handlers in the chain except for those that are set up to handle errors
```
