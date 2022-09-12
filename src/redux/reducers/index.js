/** @format */
import {combineReducers} from 'redux';
import {fetch, fetchRegister} from '../reducers/Auth';
import Movies from '../reducers/Movies';
import Upcoming from '../reducers/UpcomingMovies';
import Cinema from '../reducers/Cinema';
import {fetchAddOrder, fetchGetOrder} from '../reducers/Order';
import {fetchgetProfile, fetchupdateProfile} from './Profile';
const rootReducer = combineReducers({
  auth: fetch,
  movies: Movies,
  upcomingmovies: Upcoming,
  cinema: Cinema,
  order: fetchAddOrder,
  getorder: fetchGetOrder,
  getprofile: fetchgetProfile,
  updateprofile: fetchupdateProfile,
});

export default rootReducer;
//TES COMMENTAR
