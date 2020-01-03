import styled from "styled-components";

export const StarButton = styled.button`
	background-color: ${prop => prop.theme.secondaryColor};
	color: ${prop => prop.theme.primaryColor};
	border: 1px solid ${prop => prop.theme.primaryColor};
	padding: 0.6rem ${prop => (prop.disabled ? "3rem" : "2rem")};
	font-weight: 600;
	border-radius: 4px;
	cursor: pointer;
	display: block;
	margin: auto;
	transition: padding 200ms linear;
	&:hover {
		padding: 0.6rem 3rem;
	}
`;
