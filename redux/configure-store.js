import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as Debug from 'debug';
import rootReducer from './root-reducer';

// log.setLevel('silent');
const debug = Debug('store');
debug('debugging store.js');


const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([thunk]),
  );


  debug('creating store::::');
  return store;
}

export default configureStore;
