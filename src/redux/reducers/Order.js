/** @format */
const initialState = {
  loading: false,
  data: {
    message: '',
    status: '',
    result: [],
  },
  error: null,
};
const initialStateGetOrder = {
  loading: false,
  data: {
    message: '',
    status: '',
    data: [],
  },
  error: null,
};

const fetchAddOrder = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ORDER_REQUEST':
      return {...state, loading: true};
    case 'ADD_ORDER_ERROR':
      return {...state, loading: false, data: {}, error: action.payload};
    case 'ADD_ORDER_SUCCESS':
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
const fetchGetOrder = (state = initialStateGetOrder, action = {}) => {
  switch (action.type) {
    case 'GET_ORDER_REQUEST':
      return {...state, loading: true};
    case 'GET_ORDER_ERROR':
      console.log(action.payload, 'ini error action payloadnya');
      return {...state, loading: false, data: {}, error: action.payload};
    case 'GET_ORDER_SUCCESS':
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

export {fetchAddOrder, fetchGetOrder};
