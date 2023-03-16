import React from "react";

const Result = ({ item, type, key }) => {
	return (
		<div key={key}>
			<b>{type}: </b>
			{item[1]}
		</div>
	);
};

export default Result;
