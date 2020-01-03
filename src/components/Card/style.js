import styled from "styled-components";

export const CardContainer = styled.div`
	color: black;
	background: linear-gradient(
		to bottom left,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.5)
	);
	width: 20rem;
	min-height: 18rem;
	position: relative;
	margin: 1rem auto;
	border-radius: 8px;
	@media screen and (max-width: 720px) {
		width: 90%;
		margin: 1rem auto;
	}
`;

export const CardHeader = styled.div`
	border-bottom: 2px solid black;
	padding: 1rem 2rem;
	text-align: center;
	font-weight: 600;
	font-size: 1.3rem;
`;

export const CardBody = styled.div`
	padding: 1rem 1.5rem;
	& ul li:not(:first-child) {
		padding-top: 1rem;
	}
	& ul li:last-child {
		position: absolute;
		bottom: 5%;
		left: 0;
		width: 100%;
		padding: 1rem;
		text-align: center;
	}
`;
