export const changeFormatPrice = (sum: string): string => {
	const strSum = String(sum);
	let index = 0;
	const str: string[] = [];
	for (let i = strSum.length; i > 0; i = i - 1) {
		if (index === 3) {
			str.push(' ');
			str.push(strSum[i - 1]);
			index = 1;
		} else {
			str.push(strSum[i - 1]);
			index = index + 1;
		}
	}
	return str.reverse().join('');
};
