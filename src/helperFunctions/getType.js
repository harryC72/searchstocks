const getType = (item) => {
	let string = item[0].substring(2).trim();
	const type = string.charAt(0).toUpperCase() + string.slice(1);
	return type;
};

export default getType;
