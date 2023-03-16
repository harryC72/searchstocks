import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./../../context/AppContext";

const Saved = () => {
	const [savedItems, setSavedItems] = useState([]);
	const [data, setData] = useState([]);
	const { savedStocks } = useContext(AppContext);

	useEffect(() => {
		const items = { ...localStorage };
		console.log("ITEMS FROM EFFECT", items);
		setSavedItems(items);
	}, []);

	useEffect(() => {
		if (
			savedStocks &&
			savedStocks.length > 0 &&
			savedItems &&
			savedItems.length > 0
		) {
			setData(
				savedStocks &&
					savedStocks.length > 0 &&
					savedStocks.map((item) => {
						console.log("ITEM FROM SAVED", savedItems[item]);
						return JSON.parse(savedItems[item]);
					})
			);
		}
	}, [savedItems, savedStocks]);

	return (
		<div>
			{data &&
				data.length > 0 &&
				data.map((item, index) => {
					console.log("ITEM FROM DATA", item);
					return <div key={item + index}>{item}</div>;
				})}
		</div>
	);
};

export default Saved;
