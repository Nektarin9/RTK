export interface Services {
	id?: number | string;
	description?: string;
	price?: string;
	startDate?: string;
	endDate?: string;
}

export interface ServicesSliceState {
	services: Services[];
	service: Services;
}
