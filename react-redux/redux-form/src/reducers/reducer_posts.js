import { FETCH_POSTS, FETCH_POST, ADD_FIELD } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    post: null,
    fields: {
            title: {
                type: 'input',
                label: 'Post Title'
            },
            categories: {
                type: 'input',
                label: 'Post Categories'
            },
            content: {
                type: 'textarea',
                label: 'Post Content'
            }
    }
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state,
                post: action.payload.data
            };
        case FETCH_POSTS:
            return {
                ...state,
                all: action.payload.data
            };
        case ADD_FIELD:
            return {
                ...state,
                fields: Object.assign({}, state.fields, {
                    new: {
                type: 'input',
                label: 'New'
            } })
                };
        default:
            return state;
    }
}