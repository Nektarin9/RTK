import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, updateService } from '../actions';
import { fetchService } from '../actions/fetch-service';
import { changeData } from '../utils/change-data';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		services: [],
		service: {},
	},
	reducers: {
		clearService: (state) => {
			state.service = {};
		},
	},
	extraReducers: (builder) => {
		/* Получение обьектов с сервисами */
		builder.addCase(fetchServices.fulfilled, (state, action) => {
			state.services = action.payload;
		});
		builder.addCase(fetchService.fulfilled, (state, action) => {
			/* Получение сервиса */
			state.service = action.payload;
		});
		builder.addCase(updateService.fulfilled, (state, action) => {
			changeData(state.services, action.payload, 'UPDATE');
		});
	},
});

// Экспортируем редукторы
export const { clearService } = appSlice.actions;
export default appSlice.reducer;
