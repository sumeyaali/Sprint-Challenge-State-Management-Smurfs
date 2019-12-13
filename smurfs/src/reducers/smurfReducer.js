import {
    FETCH_A_SMURF_START,
    FETCH_A_SMURF_SUCCESS,
    FETCH_A_SMURF_FAILURE
} from "../actions/indexActions";


export const initialState = {
    greeting: 'Hi! Im a smurf!',
    isFetching: false,
    error: '',
    smurf:null
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_A_SMURF_START: 
            return {
                ...state,
               isFetching: true
            };

            case FETCH_A_SMURF_SUCCESS :
                return {
                    ...state,
                    isFetching: false,
                    error: ''
                };

                case FETCH_A_SMURF_FAILURE : 
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }





        default :
        return state
    };
}