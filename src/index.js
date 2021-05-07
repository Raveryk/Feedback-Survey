import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducer for feeling feedback
const feelingReducer = (state=(0), action) => {
    if( action.type === 'SET_FEELING') {

        return action.payload
    }

    return state
}

// reducer for content feedback
const contentReducer = (state=(0), action) => {
    if( action.type === 'SET_UNDERSTAND') {

        return action.payload
    }

    return state
}

// reducer for support feedback
const supportReducer = (state=(0), action) => {
    if( action.type === 'SET_SUPPORT') {

        return action.payload
    }

    return state
}

// reducer for extra comments
const commentReducer = (state=(''), action) => {
    if( action.type === 'SET_COMMENTS') {

        return action.payload
    }

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
