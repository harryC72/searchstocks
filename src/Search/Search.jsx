import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const Search = (props) => {
	const { search } = props;
	const [query, setQuery] = useState("");
	const [searchRes, setSearchRes] = useState([]);

	useEffect(() => {
		const searchFunc = async (arg) => {
			const res = await search(arg);
			setSearchRes(res.response.data.bestMatches);
			console.log("SET RES FROM USEEFFECT", res.response.data.bestMatches);
		};

		if (query.length >= 2) {
			searchFunc(query);
		}

		if (query.length < 2) {
			setSearchRes("");
		}
	}, [query, search]);

	return (
		<div>
			<SearchInput placeholder="Search for stock" onChange={setQuery} />
			{searchRes &&
				searchRes.map((item, index) => {
					return <div key={item + index}>{item[Object.keys(item)[0]]}</div>;
				})}
		</div>
	);
};

export default Search;
