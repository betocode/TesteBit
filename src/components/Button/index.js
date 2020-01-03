import React from "react";
import { StarButton } from "./styles";

const index = props => {
	const { onclick, disabled, children } = props;
	const action = () => {
		if (onclick) onclick();
	};

	return (
		<StarButton disabled={disabled} onClick={action}>
			{children}
		</StarButton>
	);
};

export default index;
