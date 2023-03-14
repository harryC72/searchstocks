import React from "react";
import { useRouter } from "next/router";
import { searchStocks } from "./../../services/searchStocks";

const Stock = (props) => {
	const { data } = props;
	console.log("DATA FROM STOCK PAGE", Object.entries(data.bestMatches[0]));
	const traverseData = Object.entries(data.bestMatches[0]);
	const router = useRouter();
	const { stock } = router.query;

	return (
		<>
			<h2>STOCK INFO {stock}</h2>
			{traverseData &&
				traverseData.map((item, index) => {
					let string = item[0].substring(2).trim();
					const type = string.charAt(0).toUpperCase() + string.slice(1);
					return (
						<div key={item[0] + index}>
							<b>{type}: </b>
							{item[1]}
						</div>
					);
				})}
		</>
	);
};

export async function getServerSideProps(context) {
	const { stock } = context.query;
	const data = await searchStocks(stock);

	return {
		props: {
			data: data.response.data,
		},
	};
}

export default Stock;
