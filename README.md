

**Description**

This is a sample project to demonstrate using React and Redux to access [The Movie Database API](https://developers.themoviedb.org)

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app) and as such has server-side rendering

It uses [redux-thunk](https://github.com/reduxjs/redux-thunk) to manage asynchronous updates to the Redux store 

The CSS styling is rudimentary, with focus given to the code


---
**To run the project** 

`yarn`

`yarn dev`

and access the client at [http://localhost:3000](http://localhost:3000)

----
**Testing**

This project does basic testing of the API logic using [tape](https://www.npmjs.com/package/tape), [tape-promise](https://www.npmjs.com/package/tape-promise) and [moxios](https://www.npmjs.com/package/moxios)

To test logic

`cd tests/logic`

`node index.test.js`
