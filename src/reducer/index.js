const initialState = {
    characterData: {},
    isFetching: false,
    isError: false
}

const asynchReducer = (state = initialState, action)=> {
    switch(action.type) {
        case "FETCH_CHARACTER":
            return Object.assign({}, state, {
                isFetching: true,
                characterData:{},
                isError: false
            });
        case "FETCH_CHARACTER":
            return Object.assign({}, state, {
                characterData: action.data,
                isFetching: false,
                isError: false
            });
        default:
            return state;


    }
    return state;
};

export default asynchReducer;