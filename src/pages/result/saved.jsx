import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./../../context/AppContext";
import getType from "./../../helperFunctions/getType";
import Result from "../../components/Result/Result";

const Saved = () => {
	const [savedItems, setSavedItems] = useState([]);
	const [data, setData] = useState([]);
	const { savedStocks } = useContext(AppContext);

	useEffect(() => {
		const items = { ...localStorage };
		console.log(items, savedStocks);
		setSavedItems(items);
	}, []);

	useEffect(() => {
		console.log("SAVED ITEMS 0", savedStocks[0]);
		let res = [];
		if (savedItems && Object.keys(savedItems).length > 0) {
			res = savedStocks.map((item, index) => {
				const key = savedStocks[index];

				return [...JSON.parse(savedItems[key])];
			});
		}
		setData(res);
	}, [savedItems, savedStocks]);

	return (
		<>
			<h2>Saved Stocks</h2>
			<div>
				{data.map((innerArray, index) => (
					<div key={index}>
						{innerArray.map((item, index) => {
							const type = getType(item);
							return <Result item={item} key={item[0] + index} type={type} />;
						})}
					</div>
				))}
				{/* {data[0] &&
					data[0].length > 0 &&
					data[0].map((item, index) => {
						const type = getType(item);
						return <Result item={item} key={item[0] + index} type={type} />;
					})} */}
			</div>
		</>
	);
};

export default Saved;
