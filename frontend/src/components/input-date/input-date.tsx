import styled from 'styled-components';

interface InputDateProps {
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value?: string;
	maxLength?: number;
	type?: string;
	width?: string;
	border?: string;
}

const InputDateConteiner: React.FC<InputDateProps> = ({ className, ...props }) => {
	return <input className={className} {...props} />;
};

export const InputDate = styled(InputDateConteiner)`
	width: ${({ width = '100%' }) => width};
	border-radius: 10px;
	font-size: 16px;
	font-weight: 500;
	color: black;
	padding: 25px 10px 8px 10px;
	border: ${({ border = '2px solid #d4d4d4;' }) => border};
`;
