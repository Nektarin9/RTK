import { Routing } from './routing';
import styled from 'styled-components';

export const AppContainer = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<Routing />
		</div>
	);
};

export const App = styled(AppContainer)`
	margin: 100px auto;
	max-width: 1400px;
`;
