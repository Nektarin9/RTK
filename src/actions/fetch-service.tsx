import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const fetchService: any = createAsyncThunk(
	'services/fetchService',
	async (id: string | number) => {
		try {
			const response = await request(`http://localhost:3005/services/${id}`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
