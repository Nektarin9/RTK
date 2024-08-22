import { useEffect } from 'react';
import { Button, Card, Loader } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../actions';
import { selectSalesServices } from '../../selectors';
import { clearService } from '../../reducers/app-slice';
import { Link } from 'react-router-dom';
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
			<div className="btn">
				<Link to={'/services/add'}>
					<Button>Добавить задание</Button>
				</Link>
			</div>
			{services.length ? (
				<div className="container">
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
			) : (
				<Loader />
			)}
		</div>
	);
};

export const SalesServices = styled(SalesServicesContainer)`
	.btn {
		display: flex;
		justify-content: flex-end;
	}
	.container {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}
`;
