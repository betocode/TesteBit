import React from "react";
import MainPage from "./pages/MainPage";
import Modal from "./components/Modal";
import styled, { ThemeProvider } from "styled-components";
import useFetch from "./hooks/useFetch";
import starwars from "./assets/images/starwarsbg.webp";

const App = () => {
	const apiEndPoint = "https://swapi.co/api/planets/";
	const { error, data, resetError } = useFetch("get", apiEndPoint);

	const theme = {
		primaryColor: "#ffe81f",
		secondaryColor: "#000000"
	};

	return (
		<ThemeProvider theme={theme}>
			<BackGround>
				<Modal error={error} onclick={resetError} />
				{data.count && <MainPage totalPlanets={data.count} />}
			</BackGround>
		</ThemeProvider>
	);
};

export const BackGround = styled.div`
	height: 100vh;
	width: 100vw;
	background:linear-gradient(to bottom left,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('${starwars}');
	overflow:hidden;
`;

export default App;
