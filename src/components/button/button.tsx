import styled from 'styled-components';

const ButtonContainer = ({
	className,
	children,
	onClick,
}: {
	className?: string;
	children?: string;
	backgroundColorHover?: string;
	border?: string;
	color?: string;
	colorHover?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button className={className} onClick={onClick}>
			<p>{children}</p>
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	border: ${({ border = '2px solid #c2c1c1;' }) => border};
	color: ${({ color = '#242424' }) => color};
	border-radius: 10px;
	font-size: 14px;
	padding: 10px;
	cursor: pointer;
	transform: 0.15s;
	transition: 0.15s;
	background-color: transparent;
	&:hover {
		background-color: ${({ backgroundColorHover = 'none' }) => backgroundColorHover};
		color: ${({ colorHover = '#242424' }) => colorHover};
		transform: 0.15s;
		transition: 0.15s;
	}
`;
