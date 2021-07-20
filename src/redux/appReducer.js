import { Auth } from "./auth.reducer";

const SET_INITIAL = 'SET_INITIAL';

let initial = {
    initialised: false
}

let appReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_INITIAL:
            return {
                ...state,
                initialised: true
            }
        default:
            return state;
    }
};

export let initialisedSuccess = () => { return { type: SET_INITIAL }};

export let initialize = () => (dispatch) => {
     let promise =  dispatch(Auth());
     Promise.all([promise])
        .then(()=> {
            dispatch(initialisedSuccess())
     })
};

export default appReducer;