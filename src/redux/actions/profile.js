/** @format */
import axios from 'axios';
const getProfileRequest = () => {
  return {
    type: 'GET_PROFILE_REQUEST',
  };
};
const getProfileSuccess = data => {
  return {
    type: 'GET_PROFILE_SUCCESS',
    payload: data,
  };
};
const getProfileError = error => {
  return {
    type: 'GET_PROFILE_ERROR',
    payload: error,
  };
};
const updateProfileRequest = () => {
  return {
    type: 'UPDATE_PROFILE_REQUEST',
  };
};
const updateProfileSuccess = data => {
  return {
    type: 'UPDATE_PROFILE_SUCCESS',
    payload: data,
  };
};
const updateProfileError = error => {
  return {
    type: 'UPDATE_PROFILE_ERROR',
    payload: error,
  };
};

export const getProfile = (profile_id, token) => {
  return dispatch => {
    dispatch(getProfileRequest());
    axios({
      method: 'GET',
      url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/profile?profile_id=${profile_id}`,
      headers: {
        token: token,
      },
    })
      .then(res => {
        dispatch(getProfileSuccess(res.data));
      })
      .catch(err => {
        dispatch(getProfileError(err.response));
      });
  };
};
export const updateProfile = (profile_id, token, data) => {
  console.log(profile_id, token, data, 'ini data yang dikirm');
  return dispatch => {
    dispatch(updateProfileRequest());
    axios({
      method: 'PATCH',
      url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/profile?profile_id=${profile_id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        token: token,
      },
      data: data,
    })
      .then(res => {
        alert(res.data.message);
        dispatch(updateProfileSuccess(res.data));
      })
      .catch(err => {
        alert(err.response.message);
        dispatch(updateProfileError(err.response));
        console.log(err.response, 'ini responya');
      });
  };
};
