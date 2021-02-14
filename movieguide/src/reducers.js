import {
    FILTER_CHANGED,
    MOVIES_LOADED,
    FAVORITED,
    UNFAVORITED
} from  './actions'

import {combineReducers} from 'redux';

export function movies(state = [], action) {
    switch (action.type) {
        case MOVIES_LOADED:
            return action.movies
        default:
            return state;
    }
}

export function loading(state = true, action) {
    switch (action.type) {
        case MOVIES_LOADED:
            return false
        default:
            return state
    }
}

export function filter(state = false, action) {
    switch (action.type) {
        case FILTER_CHANGED:
            return action.filter
        default:
            return state
    }
}

export function favorites(state=[], action) {
    switch (action.type) {
        case FAVORITED:
            return [...state, action.movieID]
        case UNFAVORITED:
            return state.filter(id => id !== action.movieID)
        default: 
            return state
    }
}

export default combineReducers({movies, filter, favorites, loading})