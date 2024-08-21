import { useEffect } from 'react';
import { Card } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../actions';
import { selectSalesServices } from '../../selectors';
import { clearService } from '../../reducers/app-slice';
import styled from 'styled-components';

const SalesServicesContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const services = useSelector(selectSalesServices);
	useEffect(() => {
		dispatch(fetchServices());
		dispatch(clearService());
	}, [dispatch]);
	return (
		<div className={className}>
			{services.map(({ id, description, price, startDate, endDate }) => (
				<Card
					key={id}
					id={id}
					description={description}
					price={price}
					startDate={startDate}
					endDate={endDate}
				/>
			))}
		</div>
	);
};

export const SalesServices = styled(SalesServicesContainer)`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
`;
