/** @format */
const initialState = {
  loading: false,
  data: {
    message: '',
    status: '',
    list: [],
    totalRow: '',
    totaldata: '',
    totalpage: '',
  },
  error: null,
};

const fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_UPCOMING_MOVIES_REQUEST':
      return {...state, loading: true};
    case 'GET_UPCOMING_MOVIES_ERROR':
      return {...state, loading: false, data: {}, error: action.payload};
    case 'GET_UPCOMING_MOVIES_SUCCESS':
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
