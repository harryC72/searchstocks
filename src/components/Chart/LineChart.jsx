import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const LineChart = (props) => {
	const { data, stockName } = props;
	const { dataArr } = data.financialItem;

	const options = {
		chart: { id: "bar-chart" },
		xaxis: {
			type: "datetime",
		},
	};
	return (
		<div className="mixed-chart">
			{typeof window !== "undefined" && (
				<Chart
					options={options}
					series={[
						{
							data: dataArr,
						},
					]}
					type="line"
					height={350}
					width={350}
				/>
			)}
		</div>
	);
};

export default LineChart;
