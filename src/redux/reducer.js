import {combineReducers} from 'redux'
import postsData from '../data/posts'

const comments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return {...state, [action.postId]: [action.comment]};
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            }
        
        default: 
            return state;
    }    
}

const posts = (state = postsData, action) => {
    console.log(action.index)
    switch (action.type) {
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        
        case 'ADD_POST':
            return [...state, action.post];
        
        default: 
            return state;
    }    
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer