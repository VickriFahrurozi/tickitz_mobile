/** @format */
const initialState = {
  loading: false,
  data: {
    message: '',
    status: '',
    data: [],
  },
  error: null,
};

const fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_CINEMA_REQUEST':
      return {...state, loading: true};
    case 'GET_CINEMA_ERROR':
      return {...state, loading: false, data: {}, error: action.payload};
    case 'GET_CINEMA_SUCCESS':
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

export default fetch;
