import React, { useContext } from "react";
import { useRouter } from "next/router";
import { getChartData, searchStocks } from "./../../services/searchStocks";
import LineChart from "../../components/Chart/LineChart";
import styles from "../../styles/Stock.module.css";
import Link from "next/link";
import { AppContext } from "./../../context/AppContext";
import getType from "../../helperFunctions/getType";
import Result from "./../../components/Result/Result";

const Stock = (props) => {
	const { data, chartData } = props;
	const traverseData = Object.entries(data.bestMatches[0]);
	const router = useRouter();
	const { stock } = router.query;
	const { savedStocks, setSavedStocks } = useContext(AppContext);

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
							const type = getType(item);
							return <Result item={item} key={item[0] + index} type={type} />;
						})}
					<div className={styles.line_chart}>
						<LineChart data={chartData} />
					</div>
				</div>
			</div>
			<Link className={styles.link} href={`/result/saved`}>
				Saved items
			</Link>
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
