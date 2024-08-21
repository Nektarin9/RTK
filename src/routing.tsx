import { Route, Routes } from 'react-router-dom';
import { EditService, SalesServices, Service } from './pages';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<SalesServices />} />
			<Route path="/services/:id" element={<Service />} />
			<Route path="/services/:id/edit" element={<EditService/>} />

		</Routes>
	);
};
