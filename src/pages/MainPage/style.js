import styled from "styled-components";
import { animated } from "react-spring";

export const BackGround = styled(animated.div)`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
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
