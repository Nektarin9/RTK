import { useState } from 'react';
import { EditCard } from '../../components';

export const AddService = () => {
	const [descriptionText, setDescription] = useState('');
	const [priceValue, setPriceValue] = useState(''); // Состояние для хранения значения числа
	const [dateStart, setDateStart] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	return (
		<EditCard
			descriptionText={descriptionText}
			setDescription={setDescription}
			priceValue={priceValue}
			setPriceValue={setPriceValue}
			setDateStart={setDateStart}
			dateStart={dateStart}
			setDateEnd={setDateEnd}
			dateEnd={dateEnd}
			action="ADD"
		/>
	);
};
