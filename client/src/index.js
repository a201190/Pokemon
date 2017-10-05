import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import Client from './client';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducer,{},applyMiddleware(reduxThunk));
ReactDOM.render(<Provider store={store}><Client/></Provider>,document.getElementById('root'));
registerServiceWorker();
