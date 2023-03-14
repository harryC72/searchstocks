import React from "react";

const SearchInput = (props) => {
	const { placeholder, onChange } = props;

	const handleChange = (input) => {
		onChange(input);
	};

	return (
		<input
			placeholder={placeholder}
			onChange={(event) => handleChange(event.target.value)}
		/>
	);
};

export default SearchInput;
