import React from "react";

const Result = ({ item, type }) => {
	return (
		<div>
			<b>{type}: </b>
			{item[1]}
		</div>
	);
};

export default Result;
