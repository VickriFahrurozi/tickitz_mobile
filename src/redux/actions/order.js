/** @format */
import axios from 'axios';
const AddOrderRequest = () => {
  return {
    type: 'ADD_ORDER_REQUEST',
  };
};
const AddOrderSuccess = data => {
  return {
    type: 'ADD_ORDER_SUCCESS',
    payload: data,
  };
};
const AddOrderError = error => {
  return {
    type: 'ADD_ORDER_ERROR',
    payload: error,
  };
};
const GetOrderRequest = () => {
  return {
    type: 'GET_ORDER_REQUEST',
  };
};
const GetOrderSuccess = data => {
  return {
    type: 'GET_ORDER_SUCCESS',
    payload: data,
  };
};
const GetOrderError = error => {
  return {
    type: 'GET_ORDER_ERROR',
    payload: error,
  };
};

export const AddOrder = data => {
  return dispatch => {
    dispatch(AddOrderRequest());
    axios({
      method: 'POST',
      url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/order`,
      data: {
        account_id: data.account_id,
        movie_title: data.movie_title,
        cinema_brand: data.cinema_brand,
        cinema_name: data.cinema_name,
        order_date: data.order_date,
        order_time: data.order_time,
        order_total_seat: data.order_total_seat,
        order_price: data.order_price,
        order_seat: data.order_seat,
      },
    })
      .then(res => {
        dispatch(AddOrderSuccess(res.data));
      })
      .catch(err => {
        dispatch(AddOrderError(err.response));
      });
  };
};
export const GetOrder = id => {
  return dispatch => {
    dispatch(GetOrderRequest());
    axios({
      method: 'GET',
      url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/order/id?account_id=${id}`,
    })
      .then(res => {
        dispatch(GetOrderSuccess(res.data));
      })
      .catch(err => {
        dispatch(GetOrderError(err.response));
      });
  };
};
