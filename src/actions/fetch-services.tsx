import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const fetchServices: any = createAsyncThunk(
	'services/fetchServices',
	async () => {
		try {
			const response = await request(`http://localhost:3005/services`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
