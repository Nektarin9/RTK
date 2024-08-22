import { Link } from 'react-router-dom';
import { Activity } from '../activity/activity';
import { Price } from '../price/price';
import styled from 'styled-components';

interface CardProps {
	className?: string;
	id?: string | number;
	description?: string;
	price?: string | number;
	startDate?: string;
	endDate?: string;
}

const CardContainer = ({
	className,
	id,
	description,
	price,
	startDate,
	endDate,
}: CardProps) => {
	return (
		<Link to={`/${id}`} className={className}>
			<div className="card">
				<h2>Продажа услуг</h2>
				<Activity />
				<div className="description">
					<p>{description}</p>
				</div>

				<div className="span-container">
					<div>
						<p className="p-calendar">Срок проведения</p>
						<p className="p-calendar">Сегмент</p>
					</div>
					<div>
						<p className="p-date">{`${startDate} - ${endDate}`}</p>
						<p className="p-date">ЗК</p>
					</div>
				</div>

				<Price price={price} />
			</div>
		</Link>
	);
};

export const Card = styled(CardContainer)`
	.card {
		width: 330px;
		min-height: 305px;
		padding: 15px;
		background-color: rgb(249, 249, 250);
		border-radius: 10px;
		transition: 0.5s;
		transform: 0.5s;
	}
	.card:hover {
		background-color: #dfe2e6;
		transition: 0.5s;
		transform: 0.5s;
	}
	h2 {
		font-size: 20px;
	}

	.description {
		margin: 20px 0 20px 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-line-clamp: 3;
	}
	p {
		font-size: 14px;
		color: #505050;
	}

	.span-container {
		display: flex;
	}

	.p-calendar {
		margin: 5px 0 5px 0;
		font-size: 14px;
		color: #505050;
	}
	.p-date {
		margin: 5px 0 5px 0;
		font-size: 14px;
		font-weight: 600;
		margin-left: 10px;
		color: black;
	}
`;
