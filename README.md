# ReduxStore

## About Redux

[Redux](https://redux.js.org/) is a predictable state container for JavaScript applications. It helps you manage the state of your app in a single, centralized store, making state changes predictable and easier to debug. Redux is commonly used with libraries like React, but it can be used with any JavaScript framework or library.

Key features of Redux:
- **Single Source of Truth:** The state of your whole application is stored in an object tree within a single store.
- **State is Read-Only:** The only way to change the state is to emit an action, an object describing what happened.
- **Changes are Made with Pure Functions:** To specify how the state tree is transformed by actions, you write pure reducers.

## What I Made

This project demonstrates a simple Redux store implementation. It includes:
- Setting up a Redux store
- Creating actions and reducers
- Dispatching actions to update the state
- Connecting the store to a UI 

Feel free to explore the code and see how Redux manages state in a scalable and predictable way!