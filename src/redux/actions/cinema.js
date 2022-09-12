/** @format */
import axios from 'axios';
const getCinemaRequest = () => {
  return {
    type: 'GET_CINEMA_REQUEST',
  };
};
const getCinemaSuccess = data => {
  return {
    type: 'GET_CINEMA_SUCCESS',
    payload: data,
  };
};
const getCinemaError = error => {
  return {
    type: 'GET_CINEMA_ERROR',
    payload: error,
  };
};

export const getCinema = () => {
  return dispatch => {
    dispatch(getCinemaRequest());
    axios({
      method: 'GET',
      url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/cinema`,
    })
      .then(res => {
        dispatch(getCinemaSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCinemaError(err.response));
      });
  };
};
