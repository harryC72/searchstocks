import axios from "axios";
const key = process.env.NEXT_PUBLIC_ALPHA_API_KEY;

export const searchStocks = async (input) => {
	let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${key}`;

	try {
		const response = await axios.get(url);
		return { response, error: null };
	} catch (error) {
		return { response: null, error };
	}
};

export const getChartData = async (input) => {
	let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${input}&apikey=${key}`;
	try {
		const { data } = await axios.get(url);
		let finItemSymbol = input;

		let financialChartXValuesFunction = [];
		let financialChartCloseValuesFunction = [];
		let financialChartOpenValuesFunction = [];
		let financialChartHighValuesFunction = [];
		let financialChartLowValuesFunction = [];

		console.log("DATA NOW", data);

		for (let key in data["Time Series (Daily)"]) {
			financialChartXValuesFunction.push(key);
			financialChartCloseValuesFunction.push(
				data["Time Series (Daily)"][key]["4. close"]
			);
			financialChartOpenValuesFunction.push(
				data["Time Series (Daily)"][key]["1. open"]
			);
			financialChartHighValuesFunction.push(
				data["Time Series (Daily)"][key]["2. high"]
			);
			financialChartLowValuesFunction.push(
				data["Time Series (Daily)"][key]["3. low"]
			);
		}
		const financialItem = {
			symbol: finItemSymbol,
			financialChartXValues: financialChartXValuesFunction,
			financialChartCloseValues: financialChartCloseValuesFunction,
			financialChartOpenValues: financialChartOpenValuesFunction,
			financialChartHighValues: financialChartHighValuesFunction,
			financialChartLowValues: financialChartLowValuesFunction,
		};

		return { financialItem, error: null };
	} catch (error) {
		return { financialItem: null, error };
	}
};
