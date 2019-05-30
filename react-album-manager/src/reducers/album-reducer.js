// src/reducers/album-reducer.js

const defaultState = {
    albums: []
}

export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'FETCH_ALBUMS': {
            return {
                ...state,
                albums: action.payload
            }
        }
        default:
            return state;
    }
}