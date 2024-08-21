import { Route, Routes } from 'react-router-dom';
import { AddService, EditService, SalesServices, Service } from './pages';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<SalesServices />} />
			<Route path="/services/:id" element={<Service />} />
			<Route path="/services/:id/edit" element={<EditService />} />
			<Route path="/services/add" element={<AddService />} />
			<Route path="/*" element={<h1>Ошибка 404</h1>} />
		</Routes>
	);
};
