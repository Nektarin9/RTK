import styled from 'styled-components';

const ActivityContainer = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<div className="flex">
				<span className="span-dot span-active">&bull;</span>
				<span className="span-active">Активность</span>
			</div>
		</div>
	);
};

export const Activity = styled(ActivityContainer)`
	margin-top: 10px;
	display: inline-block;
	background-color: #4bff4522;
	border-radius: 15px;
	.flex {
		position: relative;
		display: flex;
		align-items: center;
		padding: 5px;
	}
	.span-active {
		margin: 0 5px 0 15px;
		color: #09b509;
		font-size: 12px;
		vertical-align: middle;
	}
	.span-dot {
		position: absolute;
		left: -9px;
		font-size: 30px;
		top: -9px;
	}
`;
