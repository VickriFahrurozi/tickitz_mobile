/** @format */
const initialState = {
  loading: false,
  data: {
    message: '',
    status: '',
    result: [
      {
        profile_id: null,
        account_id: null,
        first_name: '',
        last_name: '',
        phone_number: '',
        profile_picture: '',
        created_at: '',
        updated_at: '',
      },
    ],
  },
  error: null,
};
const initialStateupdateprofile = {
  loading: false,
  data: {
    message: '',
    status: '',
    result: [],
  },
  error: null,
};

const fetchgetProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_PROFILE_REQUEST':
      return {...state, loading: true};
    case 'GET_PROFILE_ERROR':
      return {...state, loading: false, data: {}, error: action.payload};
    case 'GET_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    default:
      return state;
  }
};
const fetchupdateProfile = (state = initialStateupdateprofile, action = {}) => {
  switch (action.type) {
    case 'UPDATE_PROFILE_REQUEST':
      return {...state, loading: true};
    case 'UPDATE_PROFILE_ERROR':
      return {...state, loading: false, data: {}, error: action.payload};
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export {fetchgetProfile, fetchupdateProfile};
