import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {app} from './app/appSlice';
import {combineReducers} from '@reduxjs/toolkit';
const storeConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine all the reducers into one
const rootReducer = combineReducers({
  app,
});

const persistedReducer = persistReducer(storeConfig, rootReducer);

export default persistedReducer;
