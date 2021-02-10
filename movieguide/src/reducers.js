import {
    FILTER_CHANGED,
    MOVIES_LOADED,
    FAVORITED,
    UNFAVORITED
} from  './actions'

export function movies(state = [], action) {
    switch (action.type) {
        case MOVIES_LOADED:
            return action.movies
        default:
            return state;
    }
}