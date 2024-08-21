import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const deleteService: any = createAsyncThunk(
	'services/deleteService',
	async (id: number | string) => {
		try {
			await request(`http://localhost:3005/services/${id}`, 'DELETE');
			return id;
		} catch (error) {
			console.error(error);
		}
	},
);
