import { Services, ServicesSliceState } from '../interface/services';

interface AppState {
	appSlice: ServicesSliceState;
}
export const selectServices = (state: AppState): Services => {
	return state.appSlice.service;
};
