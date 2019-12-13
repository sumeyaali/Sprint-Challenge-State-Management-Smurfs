import {
    FETCH_A_SMURF_START,
    FETCH_A_SMURF_SUCCESS,
    FETCH_A_SMURF_FAILURE
} from "../actions/indexActions";


export const initialState = {
    isFetching: false,
    error: '',
    smurfs:[
        {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
       }]
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
                    smurfs: action.payload,
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