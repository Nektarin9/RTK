export const checkDateFormat = (inputString: string): boolean => {
	// Регулярное выражение для проверки формата даты "дд.мм.гггг"
	const dateFormatRegex =
		// eslint-disable-next-line no-useless-escape
		/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]([012][0-9]{1,3})/;

	// Проверяем входную строку на соответствие регулярному выражению
	let isValidFormat = dateFormatRegex.test(inputString);
	if (inputString.length < 10) {
		isValidFormat = false;
	}
	if (
		isNaN(Number(inputString[inputString.length - 1])) ||
		isNaN(Number(inputString[inputString.length - 2])) ||
		isNaN(Number(inputString[inputString.length - 3])) ||
		isNaN(Number(inputString[inputString.length - 4])) ||
		inputString.length === 9
	) {
		isValidFormat = false;
	}

	return !isValidFormat;
};
