import { configureStore, combineReducers } from '@reduxjs/toolkit';

import appSlice from './reducers/app-slice';


const rootReducer = combineReducers({
	appSlice,
});
export const store = configureStore({ reducer: rootReducer });
