import {Slideshow, Slide, TextoSlide} from './components/Slideshow'
import './estilos.css';
import styled from 'styled-components';

import Arriba from "./components/Arriba";
import Abajo from "./components/Abajo";

import am01 from './img/categoria/am01.jpg';
import am02 from './img/categoria/am02.jpg';
import sa01 from './img/categoria/sa01.jpg';
import sa02 from './img/categoria/sa02.jpg';

import xx01 from './img/categoria/xx01.jpg';
import xx02 from './img/categoria/xx01.jpg';
import xx03 from './img/categoria/xx01.jpg';
import xx04 from './img/categoria/xx01.jpg';
import { useState } from 'react';





function App() {
	const [mostrarCarrito, setMostrarCarrito] = useState(false)
	const handleCarrito = () =>{
		setMostrarCarrito(!mostrarCarrito)
		return console.log("carrito", mostrarCarrito)

	}
  return (
	  <ContenedorSitio>
	  <header>
		  <nav>navegacion</nav>
	  </header>
		<main>
			<Titulo>Ambar</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="/">
						<img src={am01} alt=""/>
					</a>
					<TextoSlide>
						<p>Lo mejor para el ambiente !!</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={am02} alt=""/>
					</a>
					<TextoSlide>
						<p>El mejor precio</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={sa01} alt=""/>
					</a>
					<TextoSlide>
						<p>Safirus un aroma inolvidable</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={sa02} alt=""/>
					</a>
					<TextoSlide>
						<p>Safirus un aroma inolvidable</p>
					</TextoSlide>
				</Slide>
			</Slideshow>

			<Titulo>Otros</Titulo>
			{/* <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000"> */}
			<Slideshow controles={true}>
				<Slide>
					<a href="/">
						<img src={xx01} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Diga algo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={xx02} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Diga algo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={xx03} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Diga algo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<img src={xx04} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Diga algo</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
			<Titulo>Difusores</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="/">
						<img src={xx01} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Diga algo</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
		<Footer>
			<Legales>Hola los legales</Legales>
			<Carrito mostrar={mostrarCarrito}>
				<h1>Carrito</h1>
				
					<CarritoDetalleEncabezado>
						<div>Producto</div>
						<div>Precio</div>
						<div>Cantidad</div>
					</CarritoDetalleEncabezado>
					
					
					
					<CarritoDetalleItem>
						<Item><img src={xx03} alt=""/></Item>
						<Item>350</Item>
						<Item>2</Item>
						<Item><img src={am02} alt=""/></Item>
						<Item>250</Item>
						<Item>1</Item>
					</CarritoDetalleItem>
					<hr/>
					<hr/>
					<hr/>
		
			</Carrito>
			<CarritoBoton  onClick={handleCarrito}>
				{mostrarCarrito
					? <Abajo />
					: <Arriba/>
				}
				</CarritoBoton>
		</Footer>
		</ContenedorSitio>
	);
}

const ContenedorSitio = styled.div`
	margin: 10px auto;
	width: 90%;
`
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

const Footer = styled.footer`
display: flex;
flex-direction: row;
justify-content: space-between;
position: fixed;
width: inherit;
z-index: 300;
background-color: #772323;
bottom: 0px;
`

const Legales = styled.div`
	font-size: 12px;
	color: blue;
	padding-left: 1rem;

`
const CarritoBoton = styled.button`
	font-size: 12px;
	color: red;
	padding-right: 1rem;
	cursor: pointer;
	z-index: 301;
	/* &:before{
		content: "";
		position: absolute;
		width: 100%	;
		height: 147px;
		top: -147px;
		right: 0px;
		z-index: 2;
		background-color: #baa2ff;
		display:  ${props => props.mostrar ? `inline` : 'none'};
	} */

`
const Carrito = styled.div`
	position: absolute;
	width: 100%	;
	height: 147px;
	top: -147px;
	right: 0px;
	z-index: 2;
	background-color: #baa2ff;
	display:  ${props => props.mostrar ? `inline` : 'none'};
	/* grid-template-columns: 3fr 1fr 2fr; */
	&>h1{
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		color: blue;
	}
`

const CarritoDetalleEncabezado = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 2fr;
	font-size: .8rem;
	font-weight: 600;
	text-align: center;
`
const CarritoDetalleItem = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 2fr;
	height: 100px;
	padding-bottom: 40px;
	overflow-y: scroll;
`
const Item = styled.div`
	font-size: .8rem;
	font-weight: 500;
	text-align: center;
	&>img {
		height: 80px;
		width: 80px;
	}
`
export default App;
