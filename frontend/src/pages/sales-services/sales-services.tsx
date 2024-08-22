import { useEffect, useState } from 'react';
import { Button, Card } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../actions';
import { selectSalesServices } from '../../selectors';
import { clearService } from '../../reducers/app-slice';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SalesServicesContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const services = useSelector(selectSalesServices);
	const [showNoTasksMessage, setShowNoTasksMessage] = useState(false);

	useEffect(() => {
		dispatch(fetchServices());
		dispatch(clearService());
		const timeout = setTimeout(() => {
			setShowNoTasksMessage(true);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [dispatch]);

	return (
		<div className={className}>
			<div className="btn">
				<Link to={'/add'}>
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
				showNoTasksMessage && <h1>Хм, похоже заданий нет, добавьте новое.</h1>
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
		justify-content: center;
		flex-wrap: wrap;
		gap: 15px;
	}
	h1 {
		margin-top: 40px;
		text-align: center;
		font-size: 24px;
	}
`;
