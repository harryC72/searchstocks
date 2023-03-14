import axios from "axios";

export const searchStocks = async (input) => {
	const key = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
	let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${key}`;

	try {
		const response = await axios.get(url);
		return { response, error: null };
	} catch (error) {
		return { response: null, error };
	}
};
