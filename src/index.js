import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import setupSocket from './sockets';
import createSagaMiddleware from 'redux-saga';
import handleNewMessage from './sagas';
import username from './utils/name';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
       reducers,
       applyMiddleware(sagaMiddleware)
       );

const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, {socket, username});
// store.dispatch(addUser('Me'));

ReactDOM.render(<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));