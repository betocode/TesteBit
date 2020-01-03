import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";
import Modal from "../../components/Modal";
import useFetch from "../../hooks/useFetch";
import { useSpring } from "react-spring";
import { BackGround, Container, RotatedTitle } from "./style";

const Index = props => {
	const { totalPlanets } = props;
	const randomNumber = Math.floor(Math.random() * totalPlanets + 1);
	const [param, setParam] = useState(randomNumber);
	const apiEndpoint = `https://swapi.co/api/planets/${param}`;
	const { error, loading, data, resetError } = useFetch("get", apiEndpoint);

	//animation
	const showContent = useSpring({
		to: async (next, cancel) => {
			await next({ opacity: totalPlanets ? 1 : 0 });
		},
		from: { opacity: 0 }
	});

	const generateNumber = () => {
		setParam(randomNumber);
	};

	const content =
		loading || error ? (
			<CardSkeleton />
		) : (
			<Card onclick={generateNumber} data={data} />
		);

	return (
		<BackGround style={showContent}>
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
