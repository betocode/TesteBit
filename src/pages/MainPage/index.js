import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";

import Modal from "../../components/Modal";
import useFetch from "../../hooks/useFetch";
import { BackGround, Container, RotatedTitle } from "./style";

const randomNumber = Math.floor(Math.random() * 60 + 1);

const Index = () => {
	const [param, setParam] = useState(randomNumber);
	const apiEndpoint = `https://swapi.co/api/planets/${param}`;
	const { error, loading, data, resetError } = useFetch("get", apiEndpoint);

	const generateNumber = () => {
		const randomNumber = Math.floor(Math.random() * 60 + 1);
		setParam(randomNumber);
	};

	const content =
		loading || error ? (
			<CardSkeleton />
		) : (
			<Card onclick={generateNumber} data={data} />
		);

	return (
		<BackGround>
			<Modal error={error} onclick={resetError} />
			<Container>
				<RotatedTitle>
					<div>
						<h1>STAR WARS</h1>
					</div>
				</RotatedTitle>
				{content}
				<Button disabled={loading} onclick={generateNumber}>
					GET PLANET!
				</Button>
			</Container>
		</BackGround>
	);
};

export default Index;
