const RandomNumberGenerator = (
	min: number,
	max: number,
	exclude: number,
): number => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return RandomNumberGenerator(min, max, exclude);
	} else {
		return rndNum;
	}
};
export default RandomNumberGenerator;
