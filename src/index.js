import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducer for feeling feedback
const feelingReducer = (state=[], action) => {

    return state
}

// reducer for content feedback
const contentReducer = (state=[], action) => {

    return state
}

// reducer for support feedback
const supportReducer = (state=[], action) => {

    return state
}

// reducer for extra comments
const commentReducer = (state=[], action) => {

    return state
}


//create store instance
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        contentReducer,
        supportReducer,
        commentReducer 
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
