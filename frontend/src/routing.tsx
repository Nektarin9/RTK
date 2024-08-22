import { Route, Routes } from 'react-router-dom';
import { AddService, EditService, SalesServices, Service } from './pages';
import { BackButton } from './components';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<SalesServices />} />
			<Route path="/:id" element={<Service />} />
			<Route path="/:id/edit" element={<EditService />} />
			<Route path="/add" element={<AddService />} />
			<Route
				path="*"
				element={
					<>
						<BackButton>Назад</BackButton>
						<h1>Ошибка 404</h1>
					</>
				}
			/>
		</Routes>
	);
};
