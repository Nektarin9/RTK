import { Services, ServicesSliceState } from '../interface/services';

interface AppState {
	appSlice: ServicesSliceState;
}
export const selectSalesServices = (state: AppState): Services[] => {
	return state.appSlice.services;
};
