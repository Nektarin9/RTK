import { useEffect, useState } from 'react';
import { BackButton, Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService, updateService } from '../../actions';
import { useNavigate, useParams } from 'react-router-dom';
import { selectServices } from '../../selectors';
import { changeFormatPrice } from '../../utils';
import styled from 'styled-components';


const EditServiceContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const { id, description, price, startDate, endDate } = useSelector(selectServices);
	const [descriptionText, setDescription] = useState('');
	const [priceValue, setPriceValue] = useState(''); // Состояние для хранения значения числа
	const [dateStart, setDateStart] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchService(params.id));
		setDescription(description || '');
		setPriceValue(String(price?.replaceAll(" ", "")));
		setDateStart(startDate || '');
		setDateEnd(endDate || '');
	}, [dispatch, params.id, description, price, startDate, endDate]);
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
					<input
						type="number"
						className="input-price"
						placeholder="Введите число"
						value={priceValue}
						onChange={({ target }) => {
							setPriceValue(target.value);
						}}
					/>
					<span className="span-input">Описание</span>
					<img
						className="img-input"
						src="https://s.iimg.su/s/21/WmSGiTKCZzqPCv6dS76b27UNTfmyAkFndkS5q5rU.png"
						alt="Цена"
					/>
				</div>
			</div>
			<div className="container-date">
				<div className="container-date-end-start">
					<input
						value={dateStart}
						onChange={({ target }) => setDateStart(target.value)}
						className="input-date"
						type="text"
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
					<input
						value={dateEnd}
						onChange={({ target }) => setDateEnd(target.value)}
						className="input-date"
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
					onClick={() => {
						dispatch(
							updateService({
								id,
								description: descriptionText,
								price: changeFormatPrice(priceValue),
								startDate: dateStart,
								endDate: dateEnd,
							}),
						);
						navigate(-1)
					}}
					color="#ff5500"
					colorHover="#ffffff"
					backgroundColorHover="#ff5500"
					border="2px solid #ff5500;"
				>
					Сохранить задание
				</Button>

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

export const EditService = styled(EditServiceContainer)`
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
		left: 34px;
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
	.img-input {
		position: absolute;
		right: 15px;
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
		position: relative;
		width: 100%;
	}
	.input-date {
		margin-top: 150px;
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
`;
