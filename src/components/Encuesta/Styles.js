import styled from 'styled-components';
import { ContainerFlex as CF } from './components/ContainerFlex/';
import backgroundCuestionario from '../assets/images/backgroundCuestionario.jpg';

const ContainerFlex = styled(CF)`
	/* background-image: url(require('../assets/images/backgroundCuestionario.jpg')); */
	/* background-position: 'center center */
	/* background-repeat: 'no-repeat'; */
	/* background-size: 'cover'; */
	/* background: #1b2631; */

	/* background: green; */
	/* border: 5px solid red; */
	min-height: 100vh;
	color: white;
	position: relative;
	padding-top: 5%;
`;

const EvaluationName = styled.div`
	font-size: 20px;
	font-weight: 600;
	opacity: 0.5;
	margin-bottom: 10px;
`;

const ContainerLoader = styled(CF)`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 100vh; */
`;

const TextInformative = styled.p`
	font-size: 20px;
	opacity: 0.6;
`;

export { ContainerFlex, EvaluationName, ContainerLoader, TextInformative };
