import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';
import { Services } from '../interface/services';

export const addService: any = createAsyncThunk(
	'services/addService',
	async (data: Services) => {
		try {
			const response = await request(`http://localhost:3005/services`, 'POST', {
				description: data.description,
				price: data.price,
				startDate: data.startDate,
				endDate: data.endDate,
			});
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
