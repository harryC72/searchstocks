import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const LineChart = (props) => {
	const { data, stockName } = props;
	const {
		financialChartXValues,
		financialChartOpenValues,
		financialChartCloseValues,
		financialChartHighValues,
		financialChartLowValues,
	} = data.financialItem;
	console.log("DATA FROM LINE CHART", data);
	const options = {
		//data on the x-axis
		chart: { id: "bar-chart" },
		xaxis: {
			categories: [financialChartXValues],
		},
		yaxis: {
			categories: [
				financialChartOpenValues,
				financialChartCloseValues,
				financialChartHighValues,
				financialChartLowValues,
			],
		},
	};
	return (
		<div className="mixed-chart">
			{typeof window !== "undefined" && (
				<Chart
					options={options}
					series={[
						financialChartOpenValues,
						financialChartCloseValues,
						financialChartHighValues,
						financialChartLowValues,
					]}
					type="line"
					height={350}
				/>
			)}
		</div>
	);
};

export default LineChart;
