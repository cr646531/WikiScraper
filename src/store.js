import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import axios from 'axios';


const initialState = {
    links: [],
    curr: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_LINKS':
            return Object.assign({}, state, {
                links: action.links
            });
        case 'SET_CURR':
            return Object.assign({}, state, {
                curr: action.curr
            });
        default: 
            return state
    }
}

// create store
export default createStore(reducer, applyMiddleware(thunk, logger));

const _setCurr = (curr) => ({
    type: 'SET_CURR',
    curr
});

const setCurr = (curr) => {
    return (dispatch) => {
        dispatch(_setCurr(curr));
    }
}

const _loadLinks = (links) => ({
    type: 'LOAD_LINKS',
    links
});

const loadLinks = () => {
    return (dispatch) => {
        return axios.get(`/links/${curr}`)
            .then(res => res.data)
            .then(links => dispatch(_loadLinks(links)))
    }
}

export { setCurr, loadLinks };