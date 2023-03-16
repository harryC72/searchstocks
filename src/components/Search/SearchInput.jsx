import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
	const { placeholder, onChange } = props;

	const handleChange = (input) => {
		onChange(input);
	};

	return (
		<input
			className={styles.input}
			placeholder={placeholder}
			onChange={(event) => handleChange(event.target.value)}
		/>
	);
};

export default SearchInput;
