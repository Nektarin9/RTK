import { Button } from '../button/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BackButton } from '../back-button/back-button';
import { changeFormatPrice, checkDateFormat } from '../../utils';
import { addService, deleteService, updateService } from '../../actions';
import { InputDate } from '../input-date/input-date';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface EditCardProps {
	className?: string;
	setDescription: (description: string) => void;
	descriptionText: string;
	setPriceValue: (priceValue: string) => void;
	priceValue: string;
	setDateStart: (dateStart: string) => void;
	dateStart: string;
	setDateEnd: (dateStart: string) => void;
	dateEnd: string;
	action: 'UPDATE' | 'ADD';
	id?: string | number;
}

const EditCardContainer = ({
	className,
	setDescription,
	descriptionText,
	setPriceValue,
	priceValue,
	setDateStart,
	dateStart,
	setDateEnd,
	dateEnd,
	action,
	id,
}: EditCardProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errorDataStart, setErrorDataStart] = useState(false);
	const [errorDataEnd, setErrorDataEnd] = useState(false);
	useEffect(() => {
		setErrorDataStart(checkDateFormat(dateStart));
		setErrorDataEnd(checkDateFormat(dateEnd));
	}, [dateStart, dateEnd]);

	function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>,
		state: (date: string) => void,
	) {
		const { value } = event.target;
		state(value);
	}

	return (
		<div className={className}>
			<BackButton>Назад</BackButton>
			<div className="container-textarea">
				<span className="span-description">Описание</span>
				<textarea
					onChange={({ target }) => setDescription(target.value)}
					value={descriptionText}
				/>

				<div className="container-input">
					<InputDate
						type="number"
						width="50%"
						className="input-price"
						placeholder="Введите число"
						value={priceValue}
						onChange={({ target }) => {
							setPriceValue(target.value);
						}}
					/>
					<span className="span-input">Описание</span>
					<img
						className="img-price"
						src="https://s.iimg.su/s/21/WmSGiTKCZzqPCv6dS76b27UNTfmyAkFndkS5q5rU.png"
						alt="Цена"
					/>
				</div>
			</div>
			<div className="container-date">
				<div className="container-date-end-start">
					{errorDataStart && (
						<span className="error">Соблюдайте формат дд.мм.гггг</span>
					)}
					<InputDate
						border={
							errorDataStart === true
								? `2px solid #ef5353;`
								: '2px solid #d4d4d4;'
						}
						value={dateStart}
						onChange={(event) => handleInputChange(event, setDateStart)}
						type="text"
						maxLength={10}
						placeholder="дд.мм.гггг"
					/>
					<span className="date-start">Дата начала</span>
					<img
						className="img-date"
						src="https://s.iimg.su/s/21/BcjVNxKW4AuaWL39T2UtpSCDQRGqhNG2z0Yuleye.png"
						alt="Дата начала"
					/>
				</div>
				<div className="container-date-end-start">
					{errorDataEnd && (
						<span className="error">Соблюдайте формат дд.мм.гггг</span>
					)}
					<InputDate
						border={
							errorDataEnd === true
								? `2px solid #ef5353;`
								: '2px solid #d4d4d4;'
						}
						value={dateEnd}
						onChange={(event) => handleInputChange(event, setDateEnd)}
						type="text"
						maxLength={10}
						placeholder="дд.мм.гггг"
					/>
					<span className="date-end">Дата окончания</span>
					<img
						className="img-date"
						src="https://s.iimg.su/s/21/BcjVNxKW4AuaWL39T2UtpSCDQRGqhNG2z0Yuleye.png"
						alt="Дата окончания"
					/>
				</div>
			</div>

			<div className="container-btn">
				<Button
					disabled={errorDataStart || errorDataEnd}
					onClick={async () => {
						if (action === 'UPDATE') {
							dispatch(
								await updateService({
									id,
									description: descriptionText,
									price: changeFormatPrice(priceValue),
									startDate: dateStart,
									endDate: dateEnd,
								}),
							);
						} else if (action === 'ADD') {
							await dispatch(
								addService({
									description: descriptionText,
									price: changeFormatPrice(priceValue),
									startDate: dateStart,
									endDate: dateEnd,
								}),
							);
						}
						navigate(-1);
					}}
					color="#ff5500"
					colorHover="#ffffff"
					backgroundColorHover="#ff5500"
					border="2px solid #ff5500;"
				>
					{action !== 'ADD' ? 'Сохранить задание' : 'Добавить задание'}
				</Button>
				{action !== 'ADD' && (
					<Button
						onClick={async () => {
							await dispatch(deleteService(id));
							navigate('/');
						}}
						color="#ff5500"
						colorHover="#ffffff"
						backgroundColorHover="#ff5500"
						border="2px solid #ff5500;"
					>
						Удалить задание
					</Button>
				)}
				<Button
					onClick={() => navigate(-1)}
					color="#ff5500"
					colorHover="#ffffff"
					backgroundColorHover="#ff5500"
					border="2px solid #ff5500;"
				>
					Отмена
				</Button>
			</div>
		</div>
	);
};

export const EditCard = styled(EditCardContainer)`
	.container-textarea {
		position: relative;
		width: 100%;
		margin-top: 20px;
		padding: 20px;
		border-radius: 15px;
		background-color: white;
	}
	textarea {
		display: block;
		border-radius: 5px;
		min-height: 300px;
		width: 100%;
		padding: 20px 15px 15px 15px;
		font-size: 18px;
		color: #121212;
		border: 2px solid #d4d4d4;
		resize: none;
	}
	.span-description {
		position: absolute;
		top: 23px;
		left: 38px;
		font-size: 14px;
		color: #565656;
	}

	.container-input {
		width: 50%;
		position: relative;
	}
	.input-price {
		margin-top: 20px;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 500;
		color: black;
		width: 100%;
		padding: 25px 10px 8px 10px;
		border: 2px solid #d4d4d4;
	}
	.span-input {
		position: absolute;
		top: 23px;
		left: 11px;
		font-size: 14px;
		color: #565656;
	}
	.img-price {
		position: absolute;
		right: 9px;
		top: 34px;
	}

	.container-date {
		position: relative;
		display: flex;
		gap: 20px;
		margin-top: 20px;
		padding: 20px;
		border-radius: 15px;
		width: 100%;
		background-color: white;
	}
	.container-date-end-start {
		margin-top: 150px;
		position: relative;
		width: 100%;
	}
	.input-date {
		width: 100%;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 500;
		color: black;
		padding: 25px 10px 8px 10px;
		border: 2px solid #d4d4d4;
	}
	.date-start {
		position: absolute;
		font-size: 14px;
		color: #565656;
		bottom: 34px;
		left: 13px;
	}
	.date-end {
		position: absolute;
		font-size: 14px;
		color: #565656;
		bottom: 34px;
		left: 13px;
	}
	.img-date {
		position: absolute;
		width: 24px;
		height: 24px;
		right: 10px;
		bottom: 14px;
	}
	.container-btn {
		display: flex;
		gap: 15px;
		margin-top: 20px;
		width: 100%;
		background-color: white;
		padding: 15px;
		border-radius: 15px;
	}
	.error {
		position: absolute;
		font-size: 14px;
		color: red;
		top: -39px;
	}
`;
