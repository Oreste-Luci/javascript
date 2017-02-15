import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // Do not change existing state, a new one has to be returned (state.concat([action.payload.data]).
    }

    return state;
}