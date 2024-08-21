import styled from 'styled-components';

const PriceContainer = ({
	className,
	price,
}: {
	className?: string;
	price?: string | number;
}) => {
	return (
		<div className={className}>
			<img
				src="https://s.iimg.su/s/21/FjvkIen0HPbhilECmb9CvAgP4Iy6AuXwVOh8S1PT.png"
				alt="Цена"
			/>
			<span className="price">{price}</span>
		</div>
	);
};

export const Price = styled(PriceContainer)`
	margin-top: 20px;
	height: 40px;
	display: flex;
	align-items: center;
	img {
		width: 30px;
		height: 30px;
	}
	.price {
		font-size: 19px;
		font-weight: 700;
		margin-left: 5px;
	}
`;
