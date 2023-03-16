import React, { useContext } from "react";
import { useRouter } from "next/router";
import { getChartData, searchStocks } from "./../../services/searchStocks";
import LineChart from "../../components/Chart/LineChart";
import styles from "../../styles/Stock.module.css";
import Link from "next/link";
import { AppContext } from "./../../context/AppContext";

const Stock = (props) => {
	const { data, chartData } = props;
	const traverseData = Object.entries(data.bestMatches[0]);
	const router = useRouter();
	const { stock } = router.query;
	const { setSavedStocks } = useContext(AppContext);

	const saveStockData = () => {
		let itemName = "";
		if (stock && stock.length > 0) itemName = stock?.toString();
		setSavedStocks((prev) => [...prev, itemName]);

		window.localStorage.setItem(itemName, JSON.stringify(traverseData));
	};

	return (
		<div className={styles.stock_container}>
			<div>
				<div className={styles.result_box}>
					<h2>STOCK INFO {stock}</h2>
					<button onClick={() => saveStockData()}>Save</button>
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
					<div className={styles.line_chart}>
						<LineChart data={chartData} />
					</div>
				</div>
			</div>
			<Link href={`/result/saved`}>Saved items</Link>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { stock } = context.query;
	const data = await searchStocks(stock);
	const chartData = await getChartData(stock);

	return {
		props: {
			data: data.response.data,
			chartData,
		},
	};
}

export default Stock;
