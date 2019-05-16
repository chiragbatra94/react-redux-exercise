React & Redux coding exercise (bootstrapped with create-react-app)

### A word about `src/api-client.js`

This file simulates a REST api-server and exports an object called `apiClient`.
This object has 3 methods.
All of these methods return ES6 Promises that will either resolve or reject based on an random factor set it `src/config.js`

The resolve argument format for a successful response is as follows:
```
{
    success: true,
    payload: any,
}
```

The resolve argument for a failed request is as follows:
```
{
    success: false,
    message: string,
    status: number
}
```
`src/config.js` contains an object called `httpErrorMap` where all possible errors are listed.


The methods are:

#### createTodo(todo: { name: string })

Success resolve arg:
```
{
    success: true,
    payload: { id: number }
}
```

#### deleteTodo(id: number)

Success resolve arg:
```
{
    success: true,
    payload: undefined
}
```

#### getAllTodos()

Success resolve arg:
```
{
   success: true,
   payload: [
    { id: number, name: string }, (todo-array)
   ]
}
```

Keep in mind that this is a simulated back-end, which means that errors are thrown randomly with no connection to actual request formats or server-statuses. This is why the errors initially mapped in `src/config.js` only contain general server-failure errors. The code for this fake back-end is less than 100 lines long, so, feel free to look through it, it's not very complex :) 

In `src/config.js` you can also configure the time a request to this fake back-end takes to complete.
 
### The exercise

React & Redux coding exercise: Sync with external data-storage through redux side-effects

Make a to-do list with the ability to create and delete list items that synchronizes with an external data-storage through asynchronous communication with a RESTful API.

Requirements:
- Have a form that collects a single value representing the name of the to-do item
- Have a list that displays all your to-do items
- Have each list item display the to-do's name and a 'delete' button or icon (trash bin, X, etc.)

- On submission handle the api-communication for the create-request until the point of success
- On creation-success add the to-do item to the list
- On delete handle the api-communication for the delete-request until the point of success
- On delete-success remove the to-do item from the list
- Display according communication states in the UI while they are ongoing (fetching & error), inline or with toasts both are fine ( if you're really lazy you can use window.alert :) )

- Have the data-processing architecture done with flux (with redux), not with component-state

UX/UI is less important for this particular exercise but anything you do to makes the user-facing part of this App pretty will be appreciated (there's no requirement to have UX fireworks but you should make something simplistic that looks modern to today's standards).

If you're good with CSS or you know how to use libraries like styled-components or JSS let that show.

Sneaking in a bit of special component architecture (HOC, render-prop, container-presentational) to show us that you know what that is will be greatly appreciated.

This is a coding exercise for the real world, and real-world in JavaScript often means working with third-party-modules, so if you there are any dependencies you’d like to add/use in this project feel free to do so. In our opinion, being comfortable in a package ecosystem is an essential skill a developer should have, especially if you're working in JavaScript.

Estimated timeframe for this exercise is ~3-4 hours.

Have fun coding! :)
