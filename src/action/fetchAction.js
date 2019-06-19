import store from '../store';

export const fetch_post = () => {
    return {
        type: "FETCH_CHARACTER"
    };
};

export const receive_post = post => {
    return {
        type: "FETCH_CHARACTER",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const thunk_action_creator = character => {
    const char = character.replace(/\s/g, "");
    store.dispatch(fetch_post());
    return function(dispatch, getState) {
       return fetch ('https://swapi.co/api/people') 
        .then(data => data.json())
        .then(data => {
            if(data.message === "Not Found") {
                throw new Error('No such character found')
            } else dispatch (receive_post(data));
        })
    }
}