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
      dispatch({ type: FETCH_A_SMURF_SUCCESS, payload: res.data});
      console.log(res.data)
    })
    .catch(err => {
      dispatch({ type: FETCH_A_SMURF_FAILURE, payload: err });
    });
};

export const addNewSmurf = (values) => dispatch => {
    dispatch({ type: ADD_A_SMURF_START });
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        dispatch({ type: ADD_A_SMURF_SUCCESS, payload: values });
      })
      .catch(err => {
        dispatch({ type: ADD_A_SMURF_FAILURE, payload: err });
      });
  };