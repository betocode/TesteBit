import styled, { keyframes } from "styled-components";

const Skeleton = keyframes`
0%{background-position:0% 73%}
50%{background-position:100% 28%}
100%{background-position:0% 73%}
    
`;
export const CardContainer = styled.div`
	color: black;
	background: linear-gradient(
		30deg,
		rgba(255, 255, 255, 0.8),
		rgba(117, 117, 117, 0.8)
	);
	background-size: 400% 400%;
	width: 20rem;
	min-height: 18rem;
	margin: 1rem auto;
	border-radius: 8px;
	animation: ${Skeleton} 1s ease infinite forwards;
`;
