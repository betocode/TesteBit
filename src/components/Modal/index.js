import React from "react";
import { ModalContainer, ModalBg } from "./style";
import Button from "../Button";
import { useSpring, animated } from "react-spring";

const Index = props => {
	const { error, onclick } = props;
	const action = () => {
		if (onclick) onclick();
	};

	const showModal = useSpring({
		display: error ? "block" : "none",
		transform: error ? `translateY(0)` : `translateY(100vh)`
	});
	return (
		<>
			{error && (
				<ModalBg>
					<ModalContainer style={showModal}>
						<h2>Houve um problema com a SWAPI API!</h2>
						<p>tente novamente mais tarde!</p>
						<Button onclick={action}>Fechar</Button>
					</ModalContainer>
				</ModalBg>
			)}
		</>
	);
};

export default Index;
