import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import styles from "./Search.module.css";

const Search = (props) => {
	const { search } = props;
	const [query, setQuery] = useState("");
	const [searchRes, setSearchRes] = useState([]);

	useEffect(() => {
		const searchFunc = async (arg) => {
			const res = await search(arg);
			setSearchRes(res.response.data.bestMatches);
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
			<div className={styles.res_container}>
				{searchRes &&
					searchRes.map((item, index) => {
						const symbol = item[Object.keys(item)[0]];
						return (
							<Link href={`/result/${symbol}`} key={item + index}>
								{symbol}
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default Search;
