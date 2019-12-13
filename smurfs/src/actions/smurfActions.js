import axios from 'axios';

export const FETCH_A_SMURF_START = 'FETCH_A_SMURF_START';
export const FETCH_A_SMURF_SUCCESS = 'FETCH_A_SMURF_SUCCESS';
export const FETCH_A_SMURF_FAILURE = 'FETCH_A_SMURF_FAILURE';

export const ADD_A_SMURF_START= 'ADD_A_SMURF_START';
export const ADD_A_SMURF_SUCCESS= 'ADD_A_SMURF_SUCCESS';
export const ADD_A_SMURF_FAILURE = 'ADD_A_SMURF_FAILURE';




export const fetchNewSmurf = () => dispatch => {
  dispatch({ type: FETCH_A_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_A_SMURF_SUCCESS, payload: res.data.value });
    })
    .catch(err => {
      dispatch({ type: FETCH_A_SMURF_FAILURE, payload: err.response });
    });
};

export const addNewSmurf = () => dispatch => {
    dispatch({ type: ADD_A_SMURF_START });
    axios
      .post('http://localhost:3333/smurfs', {
        name: " ",
        age: " ",
        height: " ",
        id: Date.now()
    })
      .then(res => {
        dispatch({ type: ADD_A_SMURF_SUCCESS, payload: res.data.value });
      })
      .catch(err => {
        dispatch({ type: ADD_A_SMURF_FAILURE, payload: err.response });
      });
  };