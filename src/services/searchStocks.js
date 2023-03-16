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

		const timeSeriesData = data["Time Series (Daily)"];

		const keys = Object.keys(timeSeriesData);
		const startDate = keys[0];
		const endDate = keys[keys.length - 1];

		console.log("START & END", startDate, endDate);

		const dataArr = [];

		for (let timestamp in timeSeriesData) {
			console.log("TIMEZ", timestamp);

			const openData = parseFloat(timeSeriesData[timestamp]["1. open"]);
			const highData = parseFloat(timeSeriesData[timestamp]["2. high"]);
			const lowData = parseFloat(timeSeriesData[timestamp]["3. low"]);
			const closeData = parseFloat(timeSeriesData[timestamp]["4. close"]);

			dataArr.push(
				{
					x: new Date(timestamp).getTime(),
					y: openData,
				},
				{
					x: new Date(timestamp).getTime(),
					y: highData,
				},
				{
					x: new Date(timestamp).getTime(),
					y: lowData,
				},
				{
					x: new Date(timestamp).getTime(),
					y: closeData,
				}
			);
		}

		console.log("DATA ARR", dataArr);
		const financialItem = {
			symbol: finItemSymbol,
			dataArr,
		};

		return { financialItem, error: null };
	} catch (error) {
		return { financialItem: null, error };
	}
};
