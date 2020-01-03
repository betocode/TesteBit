import styled from "styled-components";
import { animated } from "react-spring";

export const ModalBg = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ModalContainer = styled(animated.div)`
background-color:${prop => prop.theme.secondaryColor};
width:19rem
padding:1rem;
border:1px solid ${prop => prop.theme.primaryColor};
color:${prop => prop.theme.primaryColor};
border-radius:8px;
text-align:center;
& h2,p{
    padding-bottom:1rem;
}


`;

export const ModalButton = styled.button`
	background-color: ${prop => prop.theme.primaryColor};
	color: ${prop => prop.theme.secondaryColor};
	padding: 0.5rem 1rem;
	font-weight: 600;
	border-radius: 8px;
	border: none;
	cursor: pointer;
`;
