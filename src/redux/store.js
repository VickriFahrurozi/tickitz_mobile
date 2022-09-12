/** @format */
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], //nanti disini dimasukin yang ada di index reducers nya
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk, logger)); // CARA STANDAR
let persistor = persistStore(store);
export {store, persistor};
