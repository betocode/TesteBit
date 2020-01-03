import React from "react";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "styled-components";

const App = () => {
	const theme = {
		primaryColor: "#ffe81f",
		secondaryColor: "#000000"
	};
	return (
		<ThemeProvider theme={theme}>
			<MainPage />
		</ThemeProvider>
	);
};

export default App;
