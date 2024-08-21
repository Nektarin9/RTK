import { useEffect } from 'react';
import { Activity, BackButton, Button, Loader, Price } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService } from '../../actions';
import { Link, useParams } from 'react-router-dom';
import { selectServices } from '../../selectors';
import styled from 'styled-components';

const ServiceContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const { id, description, price, startDate, endDate } = useSelector(selectServices);
	useEffect(() => {
		dispatch(fetchService(params.id));
	}, [dispatch, params.id]);
	return (
		<div className={className}>
			<div className="flex">
				<BackButton>К списку заданий</BackButton>
				<Link to={`/services/${id}/edit`}>
					<Button>Редактировать</Button>
				</Link>
			</div>
			{id ? (
				<>
					<div className="container-description">
						<div className="container-flex">
							<h2>Продажи услуг</h2>
							<Activity />
						</div>
						<p className="description">{description},</p>
					</div>

					<div className="container-date-price">
						<div className="date-price">
							<p>Размер вознагрождения</p>
							<Price price={price} />
						</div>
						<div className="date-price">
							<p>Сроки проведения</p>
							<p className="date">{`${startDate} - ${endDate}`}</p>
						</div>
					</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export const Service = styled(ServiceContainer)`
	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.container-description {
		margin-top: 20px;
		border-radius: 15px;
		width: 100%;

		padding: 20px;
		background-color: white;
	}
	.container-flex {
		display: flex;
		justify-content: space-between;
	}
	.description {
		margin-top: 20px;
		font-size: 18px;
		color: #4c4b4b;
	}

	.container-date-price {
		margin-top: 20px;
		display: flex;
		gap: 15px;
	}
	.date-price {
		width: 100%;
		padding: 20px;
		border-radius: 15px;
		background-color: white;
	}
	.date {
		margin-top: 20px;
		font-size: 19px;
		font-weight: 700;
	}
`;
