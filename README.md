# trade-app
A full stack app for trading.

## User stories
* I can view all books posted by every user.
* I can add a new book.
* I can update my settings to store my full name, city, and state
* I can propose a trade and wait for the other user to accept the trade.

## Tech Stack
* React 
* Redux 
* React Router 
* Flexbox 
* Nodejs
* Express 
* Mongoose/MongoDB
* Webpack
* now as paas
* Use React-redux-router
* yarn 

## Questions
* Why `path.resolve("..", ".env")` goes one level up then it should in tools/server.js?
* ```
  replace({
    pathname: '/login',
    // what does this line do
    state: { nextPathname: nextState.location.pathname }
  });
  ```
* Can a redux prop be changed using dev tools ?
* UpdateAppState is called twice on homepage ?

## Todos
* Implement trade req and propose logic
* Handle image upload error on the server side so that client can be notified on error
* load images in a pretty way
* use streams and decrease the load time of images
* Check waiting message in different browser.. implement it with flex if not vendor proof
