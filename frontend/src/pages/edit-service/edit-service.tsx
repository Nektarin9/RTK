import { useEffect, useState } from 'react';
import { EditCard, Loader } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService } from '../../actions';
import { useParams } from 'react-router-dom';
import { selectServices } from '../../selectors';

export const EditService = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { id, description, price, startDate, endDate } = useSelector(selectServices);
	const [descriptionText, setDescription] = useState('');
	const [priceValue, setPriceValue] = useState(''); // Состояние для хранения значения числа
	const [dateStart, setDateStart] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	useEffect(() => {
		dispatch(fetchService(params.id));
		setDescription(description || '');
		setPriceValue(String(price?.replaceAll(' ', '')));
		setDateStart(startDate || '');
		setDateEnd(endDate || '');
	}, [dispatch, params.id, description, price, startDate, endDate]);
	return (
		<>
			{id ? (
				<EditCard
					descriptionText={descriptionText}
					setDescription={setDescription}
					priceValue={priceValue}
					setPriceValue={setPriceValue}
					setDateStart={setDateStart}
					dateStart={dateStart}
					setDateEnd={setDateEnd}
					dateEnd={dateEnd}
					action="UPDATE"
					id={id}
				/>
			) : (
				<Loader />
			)}
		</>
	);
};
