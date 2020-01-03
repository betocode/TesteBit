import styled from "styled-components";
import starwars from "../../assets/images/starwarsbg.webp";

export const BackGround = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	background:linear-gradient(to bottom left,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('${starwars}');
	overflow:hidden;
`;

export const Container = styled.div`
	width: 100%;
`;

export const RotatedTitle = styled.div`
	color: ${prop => prop.theme.primaryColor};
	text-align: center;
	width: 100%;
	max-height: 200px;
	width: 100%;
	margin: auto;
	position: relative;
	perspective: 100px;
	overflow: hidden;
	& div {
		position: relative;
		transform-style: preserve-3d;
		transform: rotateX(30deg);
	}
	& h1 {
		font-size: 3rem;
	}
`;
