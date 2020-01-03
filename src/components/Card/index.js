import React from "react";

import { CardContainer, CardHeader, CardBody } from "./style";

const Index = props => {
	const { name, climate, terrain, films, population } = props.data;
	const filmText =
		films.length === 0
			? `Not featured in films`
			: films.length === 1
			? `Featured in 1 film`
			: `Featured in ${films.length} films`;

	return (
		<CardContainer>
			<CardHeader>
				<h2>{name}</h2>
			</CardHeader>
			<CardBody>
				<ul>
					<li>Population: {population}</li>
					<li>Climate: {climate}</li>
					<li>Terrain: {terrain}</li>
					<li>{filmText}</li>
				</ul>
			</CardBody>
		</CardContainer>
	);
};

export default Index;
